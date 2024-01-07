import 'dart:async';
import 'dart:html' hide KeyEvent;

import 'package:real_t_lib/animation.dart';
import 'package:real_t_lib/input.dart';
import 'package:real_t_lib/geometry.dart';

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
  bool _isDragging = false; //TODO to input manager
  double startDeviceRoll = 0;
  double startDevicePitch = 0;
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
    _framer.Initialize();

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
      ..add(window.onDeviceOrientation.listen(_OnDeviceOrientation))
      ..add(_framer.onUpdate30.listen(_OnUpdate30))
      ..add(_keyInput.onKeyDown.listen(_OnKeyDown))
      ..add(_keyInput.onKeyUp.listen(_OnKeyUp))
      ..add(_mouseInput.onMouseDown.listen(_OnMouseDown))
      ..add(_mouseInput.onMouseUp.listen(_OnMouseUp))
      ..add(_mouseInput.onMouseMove.listen(_OnMouseMove))
      ..add(_mouseInput.onMouseWheel.listen(_OnMouseWheel))
      ..add(_touchInput.onOneTouchDown.listen(_OneTouchDown))
      ..add(_touchInput.onOneTouchUp.listen(_OneTouchUp))
      ..add(_touchInput.onOneTouchMove.listen(_OneTouchMove));
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

  void _OnDeviceOrientation(final DeviceOrientationEvent event) {
    if (event.gamma != null) {
      _currentState.OnDeviceOrientation(this, event.beta as double,
          event.gamma as double, event.alpha as double);
    }
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
    if (keyEvent.keyCode == 0) {
      _OnClick(keyEvent.position);
    }
  }

  void _OnMouseUp(final CursorEvent event) {
    var keyEvent = event as KeyCursorEvent;
    if (keyEvent.keyCode == 0) {
      _OnKcilc(keyEvent.position);
    }
  }

  void _OnMouseMove(final CursorEvent event) {
    if (_isDragging) _OnDrag(event.position);
    _currentState.OnMove(this, event.position);
  }

  void _OnMouseWheel(final CursorEvent event) {
    var wheelEvent = event as WheelCursorEvent;
    _OnScroll(wheelEvent.scrollDelta.y > 0 ? 1.0 : -1.0);
  }

  void _OneTouchDown(final CursorEvent event) {
    _OnClick(event.position);
  }

  void _OneTouchUp(final CursorEvent event) {
    _OnKcilc(event.position);
  }

  void _OneTouchMove(final CursorEvent event) {
    _OnDrag(event.position);
  }

  void _OnClick(final Point2 documentPosition) {
    _isDragging = true;
    _currentState.OnClick(this, documentPosition);
  }

  void _OnKcilc(final Point2 documentPosition) {
    _isDragging = false;
    _currentState.OnKcilc(this, documentPosition);
  }

  void _OnDrag(final Point2 documentPosition) {
    _currentState.OnDrag(this, documentPosition);
  }

  void _OnScroll(final double directionFactor) {
    _currentState.OnScroll(this, directionFactor);
  }
}
