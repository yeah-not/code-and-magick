'use strict';

// Функции
// ---------------
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
    var firstNameIndex = window.util.getRandomInt(0, FIRST_NAMES.length - 1);
    var secondNameIndex = window.util.getRandomInt(0, SECOND_NAMES.length - 1);
    var coatColorIndex = window.util.getRandomInt(0, COAT_COLORS.length - 1);
    var eyesColorIndex = window.util.getRandomInt(0, EYES_COLORS.length - 1);

    var wizardData = {
      firstName: data.firstNames[firstNameIndex],
      secondName: data.secondNames[secondNameIndex],
      coatColor: data.coatColors[coatColorIndex],
      eyesColor: data.eyesColors[wizardData]
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

// Обрабочики
// ---------------


// Вылидация настроек персонажа на ввод
var userNameInputHandler = function (evt) {
  var target = evt.target;
  if (target.validity.tooShort || target.validity.tooLong) {
    target.setCustomValidity('Поле должно содержать от 2 до 25 символов');
  } else if (target.validity.valueMissing) {
    target.setCustomValidity('Обязательное поле');
  } else {
    target.setCustomValidity('');
  }
  target.reportValidity();
};

// Изменение цвета элементов персонажа по нажатию
var wizardCoatClickHandler = function (evt) {
  coatColorInput.value = randomizeFillColor(evt.target, COAT_COLORS);
};

var wizardEyesClickHandler = function (evt) {
  eyesColorInput.value = randomizeFillColor(evt.target, EYES_COLORS);
};

var wizardFireballClickHandler = function (evt) {
  fireballColorInput.value = randomizeBgColor(evt.target, FIREBALL_COLORS);
};

// Элементы
// ---------------
var setup = document.querySelector('.setup');
var userName = setup.querySelector('.setup-user-name');

var wizardSetup = document.querySelector('.setup-wizard');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var coatColorInput = setup.querySelector('input[name=coat-color]');
var eyesColorInput = setup.querySelector('input[name=eyes-color]');
var fireballColorInput = setup.querySelector('input[name=fireball-color]');

var similarContainer = document.querySelector('.setup-similar');
var similarListElement = similarContainer.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Старт
// ---------------
var wizardsData = {
  firstNames: FIRST_NAMES,
  secondNames: SECOND_NAMES,
  coatColors: COAT_COLORS,
  eyesColors: EYES_COLORS
};

var wizards = getWizards(WIZARDS_NUM, wizardsData);
similarListElement.appendChild(renderWizards(wizards, similarWizardTemplate));
similarContainer.classList.remove('hidden');

// TEMP:
// Обрабочики валидации
userName.addEventListener('input', userNameInputHandler);
// Обработчики цвета персонажа
wizardCoat.addEventListener('click', wizardCoatClickHandler);
wizardEyes.addEventListener('click', wizardEyesClickHandler);
wizardFireball.addEventListener('click', wizardFireballClickHandler);

// TEMP:
// // Обрабочики валидации
// userName.removeEventListener('input', userNameInputHandler);
// // Обработчики цвета персонажа
// wizardCoat.removeEventListener('click', wizardCoatClickHandler);
// wizardEyes.removeEventListener('click', wizardEyesClickHandler);
// wizardFireball.removeEventListener('click', wizardFireballClickHandler);
