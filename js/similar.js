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

  var renderWizards = function (data, amount, template) {
    var similarList = window.util.makeFragment(data.slice(0, amount), renderWizard, template);

    window.util.removeChildren(similarListElement);
    similarListElement.appendChild(similarList);
  };

  // Сортировка
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var compareWizards = function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    return rankDiff === 0 ? compareNames(left.name, right.name) : rankDiff;
  };

  var compareNames = function (leftName, rightName) {
    if (leftName > rightName) {
      return 1;
    } else if (leftName < rightName) {
      return -1;
    } else {
      return 0;
    }
  };

  // Загрузка и Отображение
  var updateSimilar = function () {
    renderWizards(wizards.sort(compareWizards), window.data.wizardsNum, similarWizardTemplate);
    window.util.hide(errorElement);
    window.util.show(similarContainer);
  };

  var showError = function (message) {
    errorElement.querySelector('.error-message').textContent = message;
    window.util.show(errorElement);
    window.util.show(similarContainer);
  };

  // Обаботчики
  // ---------------
  var loadHandler = function (data) {
    wizards = data;
    updateSimilar();
  };

  var errorHandler = function (message) {
    showError(message);
  };

  window.colorization.onChange = function (element, color) {
    switch (element.classList[0]) {
      case 'wizard-coat':
        coatColor = color;
        window.util.debounce(updateSimilar);
        break;
      case 'wizard-eyes':
        eyesColor = color;
        window.util.debounce(updateSimilar);
        break;
      default:
    }
  };

  // Элементы
  // ---------------
  var similarContainer = document.querySelector('.setup-similar');
  var similarListElement = similarContainer.querySelector('.setup-similar-list');
  var errorElement = document.querySelector('.setup-similar-error');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Переменные
  // ---------------
  var wizards = [];
  var coatColor = window.data.wizardDefault.colorCoat;
  var eyesColor = window.data.wizardDefault.colorEyes;

  // Экспорт
  // ---------------
  window.similar = {
    init: function () {
      // wizards = generateWizards(window.data.wizardsNum, window.data.wizards);
      // updateSimilar();
      window.backend.load(loadHandler, errorHandler);
    }
  };
})();
