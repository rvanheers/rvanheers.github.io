import 'dart:async';
import 'dart:html' hide KeyEvent;

import 'package:real_t_lib/animation.dart';
import 'package:real_t_lib/input.dart';

import 'state/application_state.dart';
import 'state/loading_application_state.dart';

class Application {
  final _keyInput = KeyInput();
  final _mouseInput = MouseInput();
  final _touchInput = OneTouchInput();
  final _framer = Framer();
  final _subscriptions = <StreamSubscription>[];
  final _section;
  ApplicationState _currentState = EmptyApplicationState();
  ScriptElement? _sceneScript;
  DivElement? _sceneDiv;

  Element get section => _section;
  DivElement get sceneDiv => _sceneDiv!;

  static final Application _instance = Application._internal();
  factory Application() => _instance;
  Application._internal() : _section = querySelector('section')!;

  void Run() async {
    _mouseInput.Initialize();
    _keyInput.Initialize();
    _touchInput.Initialize();
    _framer.Initialize(1.0/30.0);

    _InitializeSubscriptions();

    ChangeState(LoadingApplicationState());
  }

  void Exit() {
    _FinalizeSubscriptions();

    _mouseInput.Finalize();
    _keyInput.Finalize();
    _touchInput.Finalize();
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
    _sceneDiv = querySelector("#$sceneId") as DivElement;
    _sceneScript = ScriptElement();
    _sceneScript!.src = "media/script/$sceneId.js";
    document.head!.append(_sceneScript!);
  }

  void UnbindScene() {
    _sceneDiv = null;
    document.head!.children.remove(_sceneScript);
    _sceneScript!.remove();
    _sceneScript = null;
  }

  void _InitializeSubscriptions() {
    _subscriptions
      ..add(window.onBeforeUnload.listen(_OnBeforeUnload))
      ..add(window.onHashChange.listen(_OnHashChange))
      ..add(_framer.onUpdate.listen(_OnUpdate30))
      ..add(_keyInput.onDown.listen(_OnKeyDown))
      ..add(_keyInput.onUp.listen(_OnKeyUp))
      ..add(_mouseInput.onDown.listen(_OnMouseDown))
      ..add(_mouseInput.onUp.listen(_OnMouseUp))
      ..add(_mouseInput.onMove.listen(_OnMouseMove))
      ..add(_mouseInput.onDrag.listen(_OnMouseDrag))
      ..add(_mouseInput.onWheel.listen(_OnMouseWheel))
      ..add(_touchInput.onDown.listen(_OneTouchDown))
      ..add(_touchInput.onUp.listen(_OneTouchUp))
      ..add(_touchInput.onDrag.listen(_OneTouchDrag));
  }

  void _FinalizeSubscriptions() {
    for (var subscription in _subscriptions) {
      subscription.cancel();
    }
    _subscriptions.clear();
  }

  void _OnBeforeUnload(_) => Exit();

  void _OnHashChange(_) {
    _currentState.OnHashChange(this, window.location.hash);
  }

  void _OnUpdate30(final double deltaTime) {
    _currentState.OnUpdate30(this, deltaTime);
  }

  void _OnKeyDown(final KeyEvent event) {
    _OnKey(event.code, true);
  }

  void _OnKeyUp(final KeyEvent event) {
    _OnKey(event.code, false);
  }

  void _OnKey(final int code, final bool isDown) {
    _currentState.OnKey(this, code, isDown);
  }

  void _OnMouseDown(final CursorEvent event) {
    var keyEvent = event as KeyCursorEvent;
    if (keyEvent.keyCode == 0) _currentState.OnClick(this, keyEvent.position);
  }

  void _OnMouseUp(final CursorEvent event) {
    var keyEvent = event as KeyCursorEvent;
    if (keyEvent.keyCode == 0) _currentState.OnKcilc(this, keyEvent.position);
  }

  void _OnMouseMove(final CursorEvent event) {
    _currentState.OnMove(this, event.position);
  }

  void _OnMouseDrag(final CursorEvent event) {
    var dragEvent = event as DragCursorEvent;
    _currentState.OnDrag(this, dragEvent.startPosition, dragEvent.position);
  }

  void _OnMouseWheel(final CursorEvent event) {
    var wheelEvent = event as WheelCursorEvent;
    final directionFactor = wheelEvent.scrollDelta.y > 0 ? 1.0 : -1.0;
    _currentState.OnScroll(this, directionFactor);
  }

  void _OneTouchDown(final CursorEvent event) {
    _currentState.OnClick(this, event.position);
  }

  void _OneTouchUp(final CursorEvent event) {
    _currentState.OnKcilc(this, event.position);
  }

  void _OneTouchDrag(final CursorEvent event) {
    var dragEvent = event as DragCursorEvent;
    _currentState.OnDrag(this, dragEvent.startPosition, dragEvent.position);
  }
}
