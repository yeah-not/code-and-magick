'use strict';

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var getWizard = function (data) {
  var wizard = {
    name: data.firstName + ' ' + data.secondName,
    coatColor: data.coatColor,
    eyesColor: data.eyesColor
  };

  return wizard;
};

var getWizards = function (num, data) {
  var wizards = [];

  for (var i = 0; i < num; i++) {
    var wizardData = {
      firstName: data.firstNames[getRandomInt(0, FIRST_NAMES.length - 1)],
      secondName: data.secondNames[getRandomInt(0, SECOND_NAMES.length - 1)],
      coatColor: data.coatColors[getRandomInt(0, COAT_COLORS.length - 1)],
      eyesColor: data.eyesColors[getRandomInt(0, EYES_COLORS.length - 1)]
    };
    wizards[i] = getWizard(wizardData);
  }

  return wizards;
};

var renderWizard = function (wizard, template) {
  var wizardElement = template.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizards, template) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i], template));
  }

  return fragment;
};

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUM = 4;

var wizardsData = {
  firstNames: FIRST_NAMES,
  secondNames: SECOND_NAMES,
  coatColors: COAT_COLORS,
  eyesColors: EYES_COLORS
};

var setupDialog = document.querySelector('.setup');
var setupDialogOpen = document.querySelector('.setup-open');
var setupDialogClose = setupDialog.querySelector('.setup-close');
var userNameInput = setupDialog.querySelector('.setup-user-name');

// Открытие/закрытие окна настройки персонажа
var keyEscDownHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== userNameInput) {
    closeSetupDialog();
  }
};

var openSetupDialog = function () {
  setupDialog.classList.remove('hidden');
  document.addEventListener('keydown', keyEscDownHandler);
};

var closeSetupDialog = function () {
  setupDialog.classList.add('hidden');
  document.removeEventListener('keydown', keyEscDownHandler);
};

setupDialogOpen.addEventListener('click', function () {
  openSetupDialog();
});

setupDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetupDialog();
  }
});

setupDialogClose.addEventListener('click', function () {
  closeSetupDialog();
});

setupDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetupDialog();
  }
});

// Вылидация настроек персонажа на ввод
userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.validity.tooShort || target.validity.tooLong) {
    target.setCustomValidity('Поле должно содержать от 2 до 25 символов');
  } else if (target.validity.valueMissing) {
    target.setCustomValidity('Обязательное поле');
  } else {
    target.setCustomValidity('');
  }
  target.reportValidity();
});

// // Вылидация настроек персонажа на отправку
// userNameInput.addEventListener('invalid', function (evt) {
//   var target = evt.target;
//   if (target.validity.tooShort || target.validity.tooLong) {
//     target.setCustomValidity('Поле должно содержать от 2 до 25 символов');
//   } else if (target.validity.valueMissing) {
//     target.setCustomValidity('Обязательное поле');
//   } else {
//     target.setCustomValidity('');
//   }
// });

// Вылидация настроек персонажа на ввод - альтернатива
// userNameInput.addEventListener('input', function (evt) {
//   var target = evt.target;
//   if (target.value.length < 2 || target.value.length > 25 ) {
//     target.setCustomValidity('Поле должно содержать от 2 до 25 символов');
//   } else if (target.value.length === 0) {
//     target.setCustomValidity('Обязательное поле');
//   } else {
//     target.setCustomValidity('');
//   }
//   target.reportValidity();
// });



var similarContainer = document.querySelector('.setup-similar');
var similarListElement = similarContainer.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = getWizards(WIZARDS_NUM, wizardsData);
similarListElement.appendChild(renderWizards(wizards, similarWizardTemplate));
similarContainer.classList.remove('hidden');
