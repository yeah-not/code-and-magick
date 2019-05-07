'use strict';

// Похожие волшебники
// ---------------

(function () {
  // Функции
  // ---------------
  // Генерация
  var generateWizard = function (data) {

    var firstName = window.util.getRandomElement(data.firstNames);
    var secondName = window.util.getRandomElement(data.secondNames);
    var colorCoat = window.util.getRandomElement(data.colorsCoat);
    var colorEyes = window.util.getRandomElement(data.colorsEyes);

    var wizard = {
      name: firstName + ' ' + secondName,
      colorCoat: colorCoat,
      colorEyes: colorEyes,
    };

    return wizard;
  };

  var generateWizards = function (num, data) {
    var wizards = [];
    for (var i = 0; i < num; i++) {
      wizards[i] = generateWizard(data);
    }
    return wizards;
  };

  // Отрисовка
  var renderWizard = function (wizard, template) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (wizards, amount, template) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < amount; i++) {
      fragment.appendChild(renderWizard(wizards[i], template));
    }

    return fragment;
  };

  // Обаботчики
  // ---------------
  var loadHandler = function (wizards) {
    // var wizards = generateWizards(window.data.wizardsNum, window.data.wizards);
    var wizardsList = renderWizards(wizards, window.data.wizardsNum, similarWizardTemplate);
    similarListElement.appendChild(wizardsList);
    window.util.hide(errorElement);
    window.util.show(similarContainer);
  };

  var errorHandler = function (message) {
    errorElement.querySelector('.error-message').textContent = message;
    window.util.show(errorElement);
    window.util.show(similarContainer);
  };

  // Элементы
  // ---------------
  var similarContainer = document.querySelector('.setup-similar');
  var similarListElement = similarContainer.querySelector('.setup-similar-list');
  var errorElement = document.querySelector('.setup-similar-error');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Экспорт
  // ---------------
  window.similar = {
    init: function () {
      window.backend.load(loadHandler, errorHandler);
    }
  };
})();
