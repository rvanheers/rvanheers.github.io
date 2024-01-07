import 'dart:html';
import 'dart:js';

import 'package:real_t_lib/geometry.dart';

import '../application.dart';
import 'application_state.dart';
import 'unloading_application_state.dart';

class IdleApplicationState extends ApplicationState {
  SpanElement? _fpsSpan;

  @override
  void OnEnter(final Application self) {
    _fpsSpan = self.section.children[2].children[1].children[1] as SpanElement;
  }

  @override
  void OnHashChange(final Application self, final String newHash) {
    self.ChangeState(UnloadingApplicationState());
  }

  @override
  void OnUpdate30(final Application self, final double deltaTime) {
    _fpsSpan!.innerHtml = context.callMethod('GetFPS').toString();
  }

  @override
  void OnMove(final Application self, final Point2 documentPosition) {
    Rectangle bound = self.sceneDiv.getBoundingClientRect();
    double fx = ((documentPosition.x / bound.width) - 0.5) * 2.0;
    double fy = -((documentPosition.y / bound.height) - 0.5) * 2.0;
    context.callMethod('TargetPositionSetting', [fx, fy]);
  }

  @override
  void OnDeviceOrientation(final Application self, final double pitch,
      final double roll, final double yaw) {
    double fx = ((roll - self.startDeviceRoll) / 4.0).clamp(-1.0, 1.0);
    double fy = -((pitch - self.startDevicePitch) / 4.0).clamp(-1.0, 1.0);
    context.callMethod('TargetPositionSetting', [fx, fy]);
  }
}
