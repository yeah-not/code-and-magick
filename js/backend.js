'use strict';

// Взаимодействие с сервером
// ---------------

(function () {
  // Интрефейс
  // ---------------
  window.backend = {
    load: function (onLoad, onError) {
      if (typeof onLoad === 'function') {
        onLoad();
      }
      if (typeof onError === 'function') {
        onError();
      }
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
