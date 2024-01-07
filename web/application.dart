import 'dart:async';

import 'package:real_t_lib/animation.dart';
import 'package:web/web.dart';

import 'state/application_state.dart';
import 'state/loading_application_state.dart';

class Application {
  final _framer = Framer();
  final _subscriptions = <StreamSubscription>[];
  final _section;
  ApplicationState _currentState = EmptyApplicationState();
  HTMLScriptElement? _sceneScript;
  HTMLDivElement? _sceneDiv;

  HTMLElement get section => _section;
  HTMLDivElement get sceneDiv => _sceneDiv!;

  static final Application _instance = Application._internal();
  factory Application() => _instance;
  Application._internal() : _section = document.querySelector('section')!;

  void Run() async {
    _framer.Initialize(1.0 / 30.0);

    _subscriptions
      ..add(
        EventStreamProvider<Event>(
          'beforeunload',
        ).forTarget(window).listen((_) => Exit()),
      )
      ..add(
        EventStreamProvider<Event>('hashchange')
            .forTarget(window)
            .listen(
              (_) => _currentState.OnHashChange(this, window.location.hash),
            ),
      )
      ..add(
        EventStreamProvider<Event>('status')
            .forTarget(window)
            .listen(
              (e) => _currentState.OnStatus(
                this,
                (e as CustomEvent).detail as int,
              ),
            ),
      )
      ..add(
        _framer.onUpdate.listen(
          (final double deltaTime) => _currentState.OnUpdate30(this, deltaTime),
        ),
      );

    ChangeState(LoadingApplicationState());
  }

  void Exit() {
    for (var subscription in _subscriptions) subscription.cancel();
    _subscriptions.clear();

    _framer.Finalize();

    _currentState.OnExit(this);
    _currentState = EmptyApplicationState();
  }

  void ChangeState(final ApplicationState state) {
    _currentState.OnExit(this);
    _currentState = state;
    _currentState.OnEnter(this);
  }

  void BindScene(final String sceneId) {
    _sceneDiv = document.querySelector("#$sceneId") as HTMLDivElement;
    _sceneScript = HTMLScriptElement();
    _sceneScript!.src = "media/script/$sceneId.js";
    document.head!.append(_sceneScript!);
  }

  void UnbindScene() {
    _sceneDiv = null;
    document.head!.removeChild(_sceneScript!);
    _sceneScript!.remove();
    _sceneScript = null;
  }
}
