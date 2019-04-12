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

    setup.classList.remove('hidden');

    if (window.util.isEmpty(startCoords)) {
      startCoords = window.util.getElementCoords(setup);
    } else {
      window.util.setElementCoords(setup, startCoords);
    }
  };

  var closeSetup = function () {
    setup.classList.add('hidden');

    setupClose.removeEventListener('click', closeSetup);
    setupClose.removeEventListener('keydown', setupCloseEnterPressHandler);
    document.removeEventListener('keydown', docEscPressHandler);
    handle.removeEventListener('mousedown', handleMouseDownHandler);

    setupOpen.addEventListener('click', openSetup);
    setupOpen.addEventListener('keydown', setupOpenEnterPressHandler);
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

    setup.style.left = (setup.offsetLeft + shift.x) + 'px';
    setup.style.top = (setup.offsetTop + shift.y) + 'px';
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
    window.util.isEnterEvent(etv, openSetup);
  };

  var setupCloseEnterPressHandler = function (evt) {
    window.util.isEnterEvent(etv, closeSetup);
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
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userName = setup.querySelector('.setup-user-name');
  var handle = setup.querySelector('.upload');

  // Старт
  // ---------------
  var dragged = false;
  var mouseCoords = {};
  var startCoords = {};

  setupOpen.addEventListener('click', setupOpenClickHandler);
  setupOpen.addEventListener('keydown', setupOpenEnterPressHandler);

})();
