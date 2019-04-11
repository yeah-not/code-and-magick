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
    document.addEventListener('keydown', setupEscPressDocHandler);
    handle.addEventListener('mousedown', handleMouseDownHandler);

    setupOpen.removeEventListener('click', openSetup);
    setupOpen.removeEventListener('keydown', setupOpenEnterPressHandler);

    setup.classList.remove('hidden');
  };

  var closeSetup = function () {
    setup.classList.add('hidden');

    setupClose.removeEventListener('click', closeSetup);
    setupClose.removeEventListener('keydown', setupCloseEnterPressHandler);
    document.removeEventListener('keydown', setupEscPressDocHandler);
    handle.removeEventListener('mousedown', handleMouseDownHandler);

    setupOpen.addEventListener('click', openSetup);
    setupOpen.addEventListener('keydown', setupOpenEnterPressHandler);
  };

  // Drag'n'drop
  var dragSetup = function (evt) {
    dragged = false;
    startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  var moveSetup = function (evt) {
    dragged = true;

    var shift = {
      x: evt.clientX - startCoords.x,
      y: evt.clientY - startCoords.y
    };

    startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    setup.style.top = (setup.offsetTop + shift.y) + 'px';
    setup.style.left = (setup.offsetLeft + shift.x) + 'px';
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

  var setupEscPressDocHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && evt.target !== userName) {
      closeSetup(evt);
    }
  };

  var setupOpenEnterPressHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openSetup(evt);
    }
  };

  var setupCloseEnterPressHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSetup(evt);
    }
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
  var startCoords = {};
  setupOpen.addEventListener('click', setupOpenClickHandler);
  setupOpen.addEventListener('keydown', setupOpenEnterPressHandler);

})();
