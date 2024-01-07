import '../application.dart';

abstract class ApplicationState {
  void OnHashChange(final Application self, final String newHash) {}
  void OnEnter(final Application self) {}
  void OnExit(final Application self) {}
  void OnStatus(final Application self, final int status) {}
  void OnUpdate30(final Application self, final double deltaTime) {}
}

class EmptyApplicationState extends ApplicationState {}
