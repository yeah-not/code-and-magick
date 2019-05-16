'use strict';

// Исходные данные и константы
// ---------------

(function () {
  // Константы
  // ---------------
  // Волшебники
  var WIZARDS_NUM = 4;
  var Names = {
    FIRST: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SECOND: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  };

  // Цвета
  var Colors = {
    DEFAULT: ['red', 'green', 'blue'],
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
  };

  // Экспорт
  // ---------------
  window.data = {
    colors: {
      default: Colors.DEFAULT,
      wizardCoat: Colors.COAT,
      wizardEyes: Colors.EYES,
      setupFireball: Colors.FIREBALL,
    },
    wizardDefault: {
      colorCoat: Colors.COAT[0],
      colorEyes: Colors.EYES[0],
      colorFireball: Colors.FIREBALL[0],
    },
    wizardsNum: WIZARDS_NUM,
    wizards: {
      firstNames: Names.FIRST,
      secondNames: Names.SECOND,
      colorsCoat: Colors.COAT,
      colorsEyes: Colors.EYES,
    },

  };

})();
