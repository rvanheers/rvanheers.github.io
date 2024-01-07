import 'dart:js';

import 'package:real_t_lib/animation.dart';
import 'package:real_t_lib/interpolation.dart';

import '../application.dart';
import 'application_state.dart';
import 'loading_application_state.dart';

class UnloadingApplicationState extends ApplicationState {
  static const fadeOutDuration = 0.5;

  final _animator = Animator();
  Tweener? _fadeOutTween;

  @override
  void OnEnter(final Application self) {
    _fadeOutTween = _animator.Tween(1.0, 0, fadeOutDuration,
        interpolationFunction: Interpolation.easeOutSine)
      ..onUpdate = (value) {
        self.sceneDiv.style.opacity = "$value";
        self.section.style.opacity = "$value";
      }
      ..onComplete = (_) {
        self.sceneDiv.style
          ..display = 'none'
          ..opacity = '0.0';
        self.section.style
          ..display = 'none'
          ..opacity = '0.0';
        context.callMethod('Kill');
        _fadeOutTween = null;
      };
  }

  @override
  void OnUpdate30(final Application self, final double deltaTime) {
    if (_fadeOutTween != null) {
      _animator.Update(deltaTime);
      return;
    }

    if (context['Report'] == null) {
      self.UnbindScene();
      self.ChangeState(LoadingApplicationState());
    }
  }
}
