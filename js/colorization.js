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

    var color = colorSet[window.util.getRandomInt(0, colorSet.length - 1)];
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
