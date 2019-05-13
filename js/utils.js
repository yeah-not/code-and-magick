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
    getMaxElement: function (array) {
      var max = array[0];

      for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i];
        }
      }

      return max;
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
    hide: function (el) {
      el.classList.add('hidden');
    },
    show: function (el) {
      el.classList.remove('hidden');
    },
    removeChildren: function (el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    },
    makeFragment: function (data, callback, template) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < data.length; i++) {
        fragment.appendChild(callback(data[i], template));
      }

      return fragment;
    },
  };
})();
