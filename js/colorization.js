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
      colorSet = colorsData.default;
    }

    var color = window.util.getRandomElement(colorSet);
    var tag = element.tagName.toLowerCase();

    if (tag === 'div') {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
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
