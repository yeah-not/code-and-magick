'use strict';

// Константы
// ---------------
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUM = 4;

// Утилиты
// ---------------
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

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

// Обрабочики
// ---------------
var openSetup = function () {
  // Обработчики попапа
  setupClose.addEventListener('click', closeSetup);
  setupClose.addEventListener('keydown', setupCloseEnterPressHandler);
  document.addEventListener('keydown', setupEscPressDocHandler);
  setupOpen.removeEventListener('click', openSetup);
  setupOpen.removeEventListener('keydown', setupOpenEnterPressHandler);
  // Обрабочики валидации
  userName.addEventListener('input', userNameInputHandler);
  // Обработчики цвета персонажа
  wizardCoat.addEventListener('click', wizardCoatClickHandler);
  wizardEyes.addEventListener('click', wizardEyesClickHandler);
  wizardFireball.addEventListener('click', wizardFireballClickHandler);

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
  // Обрабочики валидации
  userName.removeEventListener('input', userNameInputHandler);
  // Обработчики цвета персонажа
  wizardCoat.removeEventListener('click', wizardCoatClickHandler);
  wizardEyes.removeEventListener('click', wizardEyesClickHandler);
  wizardFireball.removeEventListener('click', wizardFireballClickHandler);
};

// Открытие/закрытие окна настройки персонажа
var setupEscPressDocHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== userName) {
    closeSetup();
  }
};

var setupOpenEnterPressHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetup();
  }
};

var setupCloseEnterPressHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetup();
  }
};

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
  var target = evt.target;
  var color = COAT_COLORS[getRandomInt(0, COAT_COLORS.length - 1)];

  target.style.fill = color;
  coatColorInput.value = color;
};

var wizardEyesClickHandler = function (evt) {
  var target = evt.target;
  var color = EYES_COLORS[getRandomInt(0, EYES_COLORS.length - 1)];

  target.style.fill = color;
  eyesColorInput.value = color;
};

var wizardFireballClickHandler = function (evt) {
  var target = evt.target;
  var color = FIREBALL_COLORS[getRandomInt(0, FIREBALL_COLORS.length - 1)];

  target.style.backgroundColor = color;
  fireballColorInput.value = color;
};

// Элементы
// ---------------
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
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

setupOpen.addEventListener('click', openSetup);
setupOpen.addEventListener('keydown', setupOpenEnterPressHandler);
