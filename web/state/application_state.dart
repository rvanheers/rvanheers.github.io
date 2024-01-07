import 'package:real_t_lib/geometry.dart';

import '../application.dart';

abstract class ApplicationState {
  void OnHashChange(final Application self, final String newHash) {}
  void OnEnter(final Application self) {}
  void OnExit(final Application self) {}
  void OnUpdate30(final Application self, final double deltaTime) {}
  void OnKey(final Application self, final int code, final bool isDown) {}
  void OnClick(final Application self, final Point2 documentPosition) {}
  void OnKcilc(final Application self, final Point2 documentPosition) {}
  void OnMove(final Application self, final Point2 documentPosition) {}
  void OnDrag(final Application self, final Point2 startDocumentPosition,
      final Point2 documentPosition) {}
  void OnScroll(final Application self, final double directionFactor) {}
}

class EmptyApplicationState extends ApplicationState {}
