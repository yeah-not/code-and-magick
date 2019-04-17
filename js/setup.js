'use strict';

// Окно настройки персонажа
// ---------------

(function () {
  // Старт
  // ---------------
  window.similar.init();

  window.dialog.onOpened = function () {
    window.wizard.init();
  };

  window.dialog.onClosed = function () {
    window.wizard.term();
  };

})();
