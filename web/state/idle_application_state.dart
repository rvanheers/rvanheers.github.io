import 'package:web/web.dart';

import '../application.dart';
import 'application_state.dart';
import 'unloading_application_state.dart';

class IdleApplicationState extends ApplicationState {
  HTMLSpanElement? _fpsSpan;

  @override
  void OnEnter(final Application self) {
    _fpsSpan =
        self.section.children.item(2)!.children.item(0)!.children.item(1)
            as HTMLSpanElement;
  }

  @override
  void OnHashChange(final Application self, final String newHash) {
    self.ChangeState(UnloadingApplicationState());
  }

  @override
  void OnStatus(final Application self, final int status) {
    _fpsSpan!.innerText = status.toString();
  }
}
