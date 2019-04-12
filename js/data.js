'use strict';

// Исходные данные и генерация объектов данных
// ---------------

(function () {
  // Константы
  // ---------------
  // Волшебники
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  // Цвета
  var COLORS = ['red', 'green', 'blue'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardsData = {
    firstNames: FIRST_NAMES,
    secondNames: SECOND_NAMES,
    coatColors: COAT_COLORS,
    eyesColors: EYES_COLORS
  };

  // Экспорт
  // ---------------
  window.data = {
    colors: {
      default: COLORS,
      wizardCoat: COAT_COLORS,
      wizardEyes: EYES_COLORS,
      setupFireball: FIREBALL_COLORS,
    },
    generateWizard: function (data) {
      var firstNameIndex = window.util.getRandomInt(0, FIRST_NAMES.length - 1);
      var secondNameIndex = window.util.getRandomInt(0, SECOND_NAMES.length - 1);
      var coatColorIndex = window.util.getRandomInt(0, COAT_COLORS.length - 1);
      var eyesColorIndex = window.util.getRandomInt(0, EYES_COLORS.length - 1);

      var wizard = {
        name: data.firstNames[firstNameIndex] + ' ' + data.secondNames[secondNameIndex],
        coatColor: data.coatColors[coatColorIndex],
        eyesColor: data.eyesColors[eyesColorIndex]
      };

      return wizard;
    },
    generateWizards: function (num) {
      var wizards = [];
      for (var i = 0; i < num; i++) {
        wizards[i] = this.generateWizard(wizardsData);
      }
      return wizards;
    }
  };

})();
