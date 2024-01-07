import 'dart:html';
import 'dart:js';

import '../application.dart';
import 'application_state.dart';
import 'unloading_application_state.dart';

class IdleApplicationState extends ApplicationState {
  SpanElement? _fpsSpan;

  @override
  void OnEnter(final Application self) {
    _fpsSpan = self.section.children[2].children[0].children[1] as SpanElement;
  }

  @override
  void OnHashChange(final Application self, final String newHash) {
    self.ChangeState(UnloadingApplicationState());
  }

  @override
  void OnUpdate30(final Application self, final double deltaTime) {
    final reportData = context.callMethod('Report');
    _fpsSpan!.innerHtml = reportData['fps'].toString();
  }
}
