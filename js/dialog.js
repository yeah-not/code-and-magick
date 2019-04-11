'use strict';
(function () {
  // Функции
  // ---------------
  var openSetup = function () {
    setupClose.addEventListener('click', setupCloseClickHandler);
    setupClose.addEventListener('keydown', setupCloseEnterPressHandler);
    document.addEventListener('keydown', setupEscPressDocHandler);
    dragHandle.addEventListener('mousedown', dragHandleMouseDownHandler);

    setupOpen.removeEventListener('click', openSetup);
    setupOpen.removeEventListener('keydown', setupOpenEnterPressHandler);

    setup.classList.remove('hidden');
  };

  var closeSetup = function () {
    setup.classList.add('hidden');

    setupClose.removeEventListener('click', closeSetup);
    setupClose.removeEventListener('keydown', setupCloseEnterPressHandler);
    document.removeEventListener('keydown', setupEscPressDocHandler);
    dragHandle.removeEventListener('mousedown', dragHandleMouseDownHandler);

    setupOpen.addEventListener('click', openSetup);
    setupOpen.addEventListener('keydown', setupOpenEnterPressHandler);
  };

  // Обрабочики
  // ---------------

  // Открытие/закрытие окна настройки персонажа
  var setupOpenClickHandler = function (evt) {
    evt.preventDefault();
    openSetup();
  }

  var setupCloseClickHandler = function (evt) {
    evt.preventDefault();
    closeSetup();
  }

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

  var dragHandleMouseDownHandler = function (evt) {
    evt.preventDefault();

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: moveEvt.clientX - startCoords.x,
        y: moveEvt.clientY - startCoords.y
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop + shift.y) + 'px';
      setup.style.left = (setup.offsetLeft + shift.x) + 'px';

    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Старт
    // ---------------
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  // Элементы
  // ---------------
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var dragHandle = setup.querySelector('.setup-user-pic');
  var userName = setup.querySelector('.setup-user-name');

  // Старт
  // ---------------
  setupOpen.addEventListener('click', setupOpenClickHandler);
  setupOpen.addEventListener('keydown', setupOpenEnterPressHandler);

  // TEMP:
  // openSetup();
  // Скрытый инпут-файл avatar
  // moveEvt
})();
