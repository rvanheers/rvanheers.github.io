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
    final reportData = context.callMethod('OnReport');
    _fpsSpan!.innerHtml = reportData['fps'].toString();
  }

  @override
  void OnMove(final Application self, final Point2 documentPosition) {
    final bound = self.sceneDiv.getBoundingClientRect();
    final xFactor = ((documentPosition.x / bound.width) - 0.5) * 2.0;
    final yFactor = -((documentPosition.y / bound.height) - 0.5) * 2.0;
    context.callMethod('OnScreenOrientation', [xFactor, yFactor]);
  }

  @override
  void OnDeviceOrientation(
    final Application self,
    final double pitch, final double roll, final double yaw) {
    final xFactor = ((roll - self.startDeviceRoll) * 0.25).clamp(-1.0, 1.0);
    final yFactor = -((pitch - self.startDevicePitch) * 0.25).clamp(-1.0, 1.0);
    context.callMethod('OnScreenOrientation', [xFactor, yFactor]);
  }
}
