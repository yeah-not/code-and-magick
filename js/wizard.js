'use strict';

// Персонаж
// ---------------

(function () {
  // Элементы
  // ---------------
  var setup = document.querySelector('.setup');
  var userName = setup.querySelector('.setup-user-name');

  var wizardSetup = document.querySelector('.setup-wizard');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball');
  var coatColorInput = setup.querySelector('input[name=coat-color]');
  var eyesColorInput = setup.querySelector('input[name=eyes-color]');
  var fireballColorInput = setup.querySelector('input[name=fireball-color]');

  // Старт
  // ---------------

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
