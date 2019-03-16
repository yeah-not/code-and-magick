'use strict';

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var getWizard = function () {
  var wizard = {
    name: FIRST_NAMES[getRandomInt(0, FIRST_NAMES.length - 1)] + ' ' + SECOND_NAMES[getRandomInt(0, SECOND_NAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInt(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInt(0, EYES_COLORS.length - 1)]
  };

  return wizard;
};

var getWizards = function (num) {
  var wizards = [];

  for (var i = 0; i < num; i++) {
    wizards[i] = getWizard();
  }

  return wizards;
};

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUM = 4;

var setupDialog = document.querySelector('.setup');
setupDialog.classList.remove('hidden');

var wizards = getWizards(WIZARDS_NUM);
