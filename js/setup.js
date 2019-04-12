'use strict';

// Константы
// ---------------
var WIZARDS_NUM = 4;

// Функции
// ---------------
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

var similarContainer = document.querySelector('.setup-similar');
var similarListElement = similarContainer.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Старт
// ---------------

var wizards = window.data.generateWizards(WIZARDS_NUM);
similarListElement.appendChild(renderWizards(wizards, similarWizardTemplate));
similarContainer.classList.remove('hidden');

// TEMP:
// Обрабочики валидации
userName.addEventListener('input', userNameInputHandler);

// Изменение цвета элементов персонажа по нажатию
window.colorization.add(wizardCoat);
window.colorization.add(wizardEyes);
window.colorization.add(wizardFireball);

// TEMP:
// // Обрабочики валидации
// userName.removeEventListener('input', userNameInputHandler);
// // Обработчики цвета персонажа

// window.colorization.remove(wizardCoat);
// window.colorization.remove(wizardEyes);
// window.colorization.remove(wizardFireball);
