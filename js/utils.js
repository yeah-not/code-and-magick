'use strict';

// Утилиты
// ---------------

(function () {
  // Константы
  // ---------------
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  // Экспорт
  // ---------------
  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    },
    getRandomElement: function (array) {
      var index = this.getRandomInt(0, array.length - 1);
      return array[index];
    },
    isEmpty: function (obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    },
    dashedToCamel: function (str) {
      return str.replace(/(\-\w)/g, function (m) {
        return m[1].toUpperCase();
      });
    },
    getElementCoords: function (el) {
      var elCoords = {
        x: el.offsetLeft,
        y: el.offsetTop
      };

      return elCoords;
    },
    setElementCoords: function (el, coords) {
      el.style.left = coords.x + 'px';
      el.style.top = coords.y + 'px';
    },
  };
})();
