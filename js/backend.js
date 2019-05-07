'use strict';

// Взаимодействие с сервером
// ---------------

(function () {
  // Константы
  // ---------------
  var URL = 'https://js.dump.academy/code-and-magick/data';

  // Интрефейс
  // ---------------
  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case 200:
            if (typeof onLoad === 'function') {
              onLoad(xhr.response);
            }
            break;
          default:
            if (typeof onError === 'function') {
              onError();
            }
        }
      });

      xhr.open('GET', URL);
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      if (typeof onLoad === 'function') {
        onLoad();
      }
      if (typeof onError === 'function') {
        onError();
      }
    },
  };
})();

// TEMP:

var onLoad = function (wizards) {
  console.log(wizards);
};

window.backend.load(onLoad);
