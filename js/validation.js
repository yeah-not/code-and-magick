'use strict';

// Валидация настроек персонажа на ввод
// ---------------

(function () {
  // Обрабочики
  // ---------------
  var elementInputHandler = function (evt) {
    var element = evt.currentTarget;
    if (element.validity.tooShort || element.validity.tooLong) {
      element.setCustomValidity('Поле должно содержать от ' + element.minLength + ' до ' + element.maxLength + ' символов');
    } else if (element.validity.valueMissing) {
      element.setCustomValidity('Обязательное поле');
    } else {
      element.setCustomValidity('');
    }
    element.reportValidity();
  };

  // Экспорт
  // ---------------
  window.validation = {
    add: function (element) {
      element.addEventListener('input', elementInputHandler);
    },
    remove: function (element) {
      element.removeEventListener('input', elementInputHandler);
    }
  };
})();
