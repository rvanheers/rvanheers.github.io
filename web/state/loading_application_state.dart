import 'dart:html';
import 'dart:js';

import 'package:real_t_lib/animation.dart';
import 'package:real_t_lib/interpolation.dart';

import '../application.dart';
import 'application_state.dart';
import 'idle_application_state.dart';
import 'unloading_application_state.dart';

class LoadingApplicationState extends ApplicationState {
  static const fadeInDuration = 2.0;

  final _animator = Animator();
  Tweener? _sceneFadeInTweener;
  Tweener? _sectionFadeInTweener;

  @override
  void OnHashChange(final Application self, final String newHash) {
    _sceneFadeInTweener!.Reset();
    self.ChangeState(UnloadingApplicationState());
  }

  @override
  void OnEnter(final Application self) {
    final targetSceneId = window.location.hash.isEmpty
        ? querySelector('.scene')!.id //take first one
        : window.location.hash.substring(1); //Remove #

    self.BindScene(targetSceneId);

    self.section
      ..style.display = "block"
      ..style.opacity = "0.0"
      ..children[1].innerHtml = ''
      ..children[2].innerHtml = "<p>Loading ...</p>";

    self.sceneDiv.style
      ..display = "block"
      ..opacity = "0.0";

    _sectionFadeInTweener = _animator.Tween(0, 1.0, fadeInDuration,
        interpolationFunction: Interpolation.easeOutSine)
      ..onUpdate = (value) {
        self.section.style.opacity = "$value";
      }
      ..onComplete = (_) {
        self.section.style.opacity = "1.0";
        _sectionFadeInTweener = null;
      };
  }

  @override
  void OnUpdate30(final Application self, final double deltaTime) {
    _animator.Update(deltaTime);

    if (_sectionFadeInTweener != null || _sceneFadeInTweener != null) return;

    if (context['Report'] == null) return;

    final reportData = context.callMethod('Report');
    final status = reportData['status'] as int;

    if (status == 0) {
      final size = reportData['size'];
      final fps = reportData['fps'];

      self.section.children[1].innerHtml = self.sceneDiv.dataset['description'];

      self.section.children[2]
        ..innerHtml = '''
          <p><i class="fa-solid fa-gauge-high right-push"></i><span>${fps}</span>FPS</p>
          <p><i class="fa-solid fa-download right-push"></i><span>${size}</span>Ko</p>
          <a href="#${self.sceneDiv.dataset['next']}">next<i class="fa-solid fa-angles-right"></i></a>
        '''
        ..children[0].children[0].style.color = "#FFD43B"
        ..children[1].children[0].style.color = "#FFD43B"
        ..children[2].style.float = "right";

      _sceneFadeInTweener = _animator.Tween(0, 1.0, fadeInDuration,
          interpolationFunction: Interpolation.easeOutSine)
        ..onUpdate = (value) {
          self.sceneDiv.style.opacity = "$value";
        }
        ..onComplete = (_) {
          self.sceneDiv.style.opacity = "1.0";
          self.ChangeState(IdleApplicationState());
        };
    }
  }
}
