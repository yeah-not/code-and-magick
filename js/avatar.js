'use strict';

// Выбор аватарки
// ---------------

(function () {
  // Константы
  // ---------------
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  // Обработчики
  // ---------------
  var fileChooserChangeHandler =  function () {
    var file = fileChooser.files[0];

    if (file) {
      var fileName = file.name.toLowerCase();

      var matches = FILE_TYPES.some(function (it) {
        return fileName.endsWith(it);
      });
    }

    if (matches) {
      var fileReader = new FileReader();

      fileReader.addEventListener('load', fileReaderLoadHandler);

      fileReader.readAsDataURL(file);
    }

  };

  var fileReaderLoadHandler = function (evt) {
    var fileReader = evt.currentTarget;
    preview.src = fileReader.result;
  }

  // Элементы
  // ---------------
  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  // Старт
  // ---------------
  fileChooser.addEventListener('change', fileChooserChangeHandler);

})();
