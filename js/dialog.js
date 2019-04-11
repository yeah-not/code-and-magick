'use strict';
(function () {
  // Функции
  // ---------------
  var openSetup = function () {
    setupClose.addEventListener('click', setupCloseClickHandler);
    setupClose.addEventListener('keydown', setupCloseEnterPressHandler);
    document.addEventListener('keydown', setupEscPressDocHandler);
    setupOpen.removeEventListener('click', openSetup);
    setupOpen.removeEventListener('keydown', setupOpenEnterPressHandler);

    setup.classList.remove('hidden');
  };

  var closeSetup = function () {
    setup.classList.add('hidden');

    // Обработчики попапа
    setupClose.removeEventListener('click', closeSetup);
    setupClose.removeEventListener('keydown', setupCloseEnterPressHandler);
    document.removeEventListener('keydown', setupEscPressDocHandler);
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

  // Элементы
  // ---------------
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userName = setup.querySelector('.setup-user-name');

  // Старт
  // ---------------
  setupOpen.addEventListener('click', setupOpenClickHandler);
  setupOpen.addEventListener('keydown', setupOpenEnterPressHandler);

  // TEMP:
  openSetup();
})();
