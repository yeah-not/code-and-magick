'use strict';

// Окрашивание DOM-элементов
// ---------------

(function () {
  // Функции
  // ---------------
  var colorize = function (element) {
    var colorSetName = window.util.dashedToCamel(element.classList[0]);
    var colorSet = window.data.colors[colorSetName];

    if (!colorSet) {
      colorSet = window.data.colors.default;
    }

    var color = window.util.getRandomElement(colorSet);
    var tag = element.tagName.toLowerCase();

    if (tag === 'div') {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }

    // Подстановка цвета в hidden input
    var colorInputName = element.dataset.input;
    var colorInput = document.querySelector('input[name=' + colorInputName + ']');
    if (colorInput) {
      colorInput.value = color;
    }
  };

  // Обрабочики
  // ---------------
  var elementClickHandler = function (evt) {
    colorize(evt.currentTarget);
  };

  // Экспорт
  // ---------------
  window.colorization = {
    add: function (element) {
      element.addEventListener('click', elementClickHandler);
    },
    remove: function (element) {
      element.removeEventListener('click', elementClickHandler);
    }
  };

})();
