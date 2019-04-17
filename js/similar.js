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
    var coatColor = window.util.getRandomElement(data.coatColors);
    var eyesColor = window.util.getRandomElement(data.eyesColors);

    var wizard = {
      name: firstName + ' ' + secondName,
      coatColor: coatColor,
      eyesColor: eyesColor,
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

  // Элементы
  // ---------------
  var similarContainer = document.querySelector('.setup-similar');
  var similarListElement = similarContainer.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Экспорт
  // ---------------
  window.similar = {
    init: function () {
      var wizards = generateWizards(window.data.wizardsNum, window.data.wizards);
      var wizardsList = renderWizards(wizards, similarWizardTemplate);
      similarListElement.appendChild(wizardsList);
      window.util.show(similarContainer);
    }
  };
})();
