'use strict';

// Управление окном настройки персонажа
// ---------------

(function () {
  // Функции
  // ---------------
  // Открытие/закрытие
  var openSetup = function () {

    setupClose.addEventListener('click', setupCloseClickHandler);
    setupClose.addEventListener('keydown', setupCloseEnterPressHandler);
    document.addEventListener('keydown', docEscPressHandler);
    handle.addEventListener('mousedown', handleMouseDownHandler);

    setupOpen.removeEventListener('click', openSetup);
    setupOpen.removeEventListener('keydown', setupOpenEnterPressHandler);

    window.util.show(setupDialog);

    if (window.util.isEmpty(startCoords)) {
      startCoords = window.util.getElementCoords(setupDialog);
    } else {
      window.util.setElementCoords(setupDialog, startCoords);
    }

    dialog.onOpened();
  };

  var closeSetup = function () {
    window.util.hide(setupDialog);

    setupClose.removeEventListener('click', closeSetup);
    setupClose.removeEventListener('keydown', setupCloseEnterPressHandler);
    document.removeEventListener('keydown', docEscPressHandler);
    handle.removeEventListener('mousedown', handleMouseDownHandler);

    setupOpen.addEventListener('click', openSetup);
    setupOpen.addEventListener('keydown', setupOpenEnterPressHandler);

    dialog.onClosed();
  };

  // Drag'n'drop
  var dragSetup = function (evt) {
    dragged = false;
    mouseCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  var moveSetup = function (evt) {
    dragged = true;

    var shift = {
      x: evt.clientX - mouseCoords.x,
      y: evt.clientY - mouseCoords.y
    };

    mouseCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    setupDialog.style.left = (setupDialog.offsetLeft + shift.x) + 'px';
    setupDialog.style.top = (setupDialog.offsetTop + shift.y) + 'px';
  };

  var dropSetup = function () {
    var handleClickHandler = function (clickEvt) {
      if (dragged) {
        clickEvt.preventDefault();
        handle.removeEventListener('click', handleClickHandler);
      }
    };

    handle.addEventListener('click', handleClickHandler);
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  // Обрабочики
  // ---------------
  // Открытие/закрытие
  var setupOpenClickHandler = function (evt) {
    evt.preventDefault();
    openSetup();
  };

  var setupCloseClickHandler = function (evt) {
    evt.preventDefault();
    closeSetup();
  };

  var docEscPressHandler = function (evt) {
    if (evt.target !== userName) {
      window.util.isEscEvent(evt, closeSetup);
    }
  };

  var setupOpenEnterPressHandler = function (evt) {
    window.util.isEnterEvent(evt, openSetup);
  };

  var setupCloseEnterPressHandler = function (evt) {
    window.util.isEnterEvent(evt, closeSetup);
  };

  // Drag'n'drop
  var handleMouseDownHandler = function (evt) {
    evt.preventDefault();
    dragSetup(evt);
  };

  var mouseMoveHandler = function (evt) {
    evt.preventDefault();
    moveSetup(evt);
  };

  var mouseUpHandler = function (evt) {
    evt.preventDefault();
    dropSetup();
  };

  // Элементы
  // ---------------
  var setupDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupDialog.querySelector('.setup-close');
  var userName = setupDialog.querySelector('.setup-user-name');
  var handle = setupDialog.querySelector('.upload');

  // Старт
  // ---------------
  var dragged = false;
  var mouseCoords = {};
  var startCoords = {};

  setupOpen.addEventListener('click', setupOpenClickHandler);
  setupOpen.addEventListener('keydown', setupOpenEnterPressHandler);

  // События открытия/закрытия
  var dialog = {
    onOpened: function () {},
    onClosed: function () {}
  };

  // Экспорт
  // ---------------
  window.dialog = dialog;

})();
