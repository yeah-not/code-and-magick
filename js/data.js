'use strict';

// Исходные данные и константы
// ---------------

(function () {
  // Константы
  // ---------------
  // Волшебники
  var WIZARDS_NUM = 4;
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  // Цвета
  var COLORS = ['red', 'green', 'blue'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Экспорт
  // ---------------
  window.data = {
    colors: {
      default: COLORS,
      wizardCoat: COAT_COLORS,
      wizardEyes: EYES_COLORS,
      setupFireball: FIREBALL_COLORS,
    },
    wizardDefault: {
      colorCoat: COAT_COLORS[0],
      colorEyes: EYES_COLORS[0],
      colorFireball: FIREBALL_COLORS[0],
    },
    wizardsNum: WIZARDS_NUM,
    wizards: {
      firstNames: FIRST_NAMES,
      secondNames: SECOND_NAMES,
      colorsCoat: COAT_COLORS,
      colorsEyes: EYES_COLORS
    },

  };

})();
