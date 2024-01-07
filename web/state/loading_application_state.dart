import 'dart:js_interop';

import 'package:real_t_lib/animation.dart';
import 'package:real_t_lib/interpolation.dart';
import 'package:web/web.dart';

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
        ? document
              .querySelector('.scene')!
              .id //take first one
        : window.location.hash.substring(1); //Remove #

    self.BindScene(targetSceneId);

    self.section
      ..style.display = "block"
      ..style.opacity = "0.0";
    (self.section.children.item(1) as HTMLElement).innerHTML = ''.toJS;
    (self.section.children.item(2) as HTMLElement).innerHTML =
        "<p>Loading...</p>".toJS;

    self.sceneDiv.style
      ..display = "block"
      ..opacity = "0.0";

    _sectionFadeInTweener =
        _animator.Tween(
            0,
            1.0,
            fadeInDuration,
            interpolationFunction: Interpolation.easeOutSine,
          )
          ..onUpdate = (value) {
            self.section.style.opacity = "$value";
          }
          ..onComplete = (_) {
            self.section.style.opacity = "1.0";
            _sectionFadeInTweener = null;
          };
  }

  @override
  void OnStatus(final Application self, final int status) {
    if (_sectionFadeInTweener != null || _sceneFadeInTweener != null) return;

    final fps = status;

    (self.section.children.item(1) as HTMLElement).innerHTML =
        self.sceneDiv.dataset['description'].toJS;

    (self.section.children.item(2) as HTMLElement)
      ..innerHTML =
          //<p style="color:#FFD43B"><i class="fa-solid fa-download right-push"></i><span>${size}</span>Ko</p>
          '''
          <p style="color:#FFD43B"><i class="fa-solid fa-gauge-high right-push"></i><span>${fps}</span>FPS</p>
          <a href="#${self.sceneDiv.dataset['next']}" style="float:right">next<i class="fa-solid fa-angles-right"></i></a>
        '''
              .toJS;

    _sceneFadeInTweener =
        _animator.Tween(
            0,
            1.0,
            fadeInDuration,
            interpolationFunction: Interpolation.easeOutSine,
          )
          ..onUpdate = (value) {
            self.sceneDiv.style.opacity = "$value";
          }
          ..onComplete = (_) {
            self.sceneDiv.style.opacity = "1.0";
            self.ChangeState(IdleApplicationState());
          };
  }

  @override
  void OnUpdate30(final Application self, final double deltaTime) {
    _animator.Update(deltaTime);
  }
}
