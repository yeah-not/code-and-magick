'use strict';

// Выбор аватарки
// ---------------

(function () {
  // Константы
  // ---------------
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  // Обработчики
  // ---------------

  // Элементы
  // ---------------
  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  // Старт
  // ---------------
  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];

    if (file) {
      var fileName = file.name.toLowerCase();

      var matches = FILE_TYPES.some(function (it) {
        return fileName.endsWith(it);
      });
    }

    if (matches) {
      var fileReader = new FileReader();

      fileReader.addEventListener('load', function () {
        preview.src = fileReader.result;
        // console.log(fileReader);
      });

      fileReader.readAsDataURL(file);
    }

  });

})();
