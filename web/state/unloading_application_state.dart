import 'package:real_t_lib/animation.dart';
import 'package:real_t_lib/interpolation.dart';
import 'package:web/web.dart';

import '../application.dart';
import 'application_state.dart';
import 'loading_application_state.dart';

class UnloadingApplicationState extends ApplicationState {
  static const fadeOutDuration = 0.5;

  final _animator = Animator();

  @override
  void OnEnter(final Application self) {
    _animator.Tween(
        1.0,
        0,
        fadeOutDuration,
        interpolationFunction: Interpolation.easeOutSine,
      )
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

        window.dispatchEvent(CustomEvent('kill'));
      };
  }

  @override
  void OnStatus(final Application self, final int status) {
    if (status < 0) {
      self.UnbindScene();
      self.ChangeState(LoadingApplicationState());
    }
  }

  @override
  void OnUpdate30(final Application self, final double deltaTime) {
    _animator.Update(deltaTime);
  }
}
