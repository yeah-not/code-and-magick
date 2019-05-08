'use strict';

// Персонаж
// ---------------

(function () {
  // Функции
  // --------------
  var showError = function (message) {
    setupError.querySelector('.error-message').textContent = message;
    window.util.show(setupError);

    setupError.addEventListener('click', setupErrorClickHandler);
    document.addEventListener('keydown', escPressHandler);
  };

  var hideError = function () {
    window.util.hide(setupError);

    setupError.removeEventListener('click', setupErrorClickHandler);
    document.removeEventListener('keydown', escPressHandler);
  };

  // Обработчики
  // --------------
  var loadHandler = function () {
    window.util.hide(setup);
  };

  var errorHandler = function (message) {
    showError(message);
  };

  var wizardSubmitHandler = function (evt) {
    evt.preventDefault();

    var wizardData = new FormData(wizardForm);

    window.backend.save(wizardData, loadHandler, errorHandler);
  };

  var setupErrorClickHandler = function () {
    hideError();
  };

  var escPressHandler = function (evt) {
    window.util.isEscEvent(evt, hideError);
  };

  // Элементы
  // ---------------
  var setup = document.querySelector('.setup');
  var setupError = setup.querySelector('.setup-error');
  var userName = setup.querySelector('.setup-user-name');

  var wizardSetup = document.querySelector('.setup-wizard');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball');

  var wizardForm = setup.querySelector('.setup-wizard-form');

  // Экспорт
  // ---------------
  window.wizard = {
    init: function () {
      // Валидация
      window.validation.add(userName);

      // Изменение цвета элементов персонажа по нажатию
      window.colorization.add(wizardCoat);
      window.colorization.add(wizardEyes);
      window.colorization.add(wizardFireball);

      // Отправка
      wizardForm.addEventListener('submit', wizardSubmitHandler);
    },
    term: function () {
      // Валидация
      window.validation.remove(userName);

      // Изменение цвета элементов персонажа по нажатию
      window.colorization.remove(wizardCoat);
      window.colorization.remove(wizardEyes);
      window.colorization.remove(wizardFireball);
    }
  };

})();
