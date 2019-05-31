'use strict';

// Выбор аватарки
// ---------------

(function () {
  // Константы
  // ---------------
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  // Функции
  // ---------------
  var chooseFile = function (files) {
    var file = files[0];

    if (file) {
      var fileName = file.name.toLowerCase();

      var matches = FILE_TYPES.some(function (it) {
        return fileName.endsWith(it);
      });
    }

    if (!matches) {
      file = undefined;
    }

    return file;
  };

  var readFile = function (file) {
    if (!file) {
      return;
    }

    var fileReader = new FileReader();

    fileReader.addEventListener('load', fileReaderLoadHandler);

    fileReader.readAsDataURL(file);
  };

  var setPreview = function (fileReader) {
    preview.src = fileReader.result;
  };

  // Обработчики
  // ---------------
  var fileChooserChangeHandler = function () {
    readFile(chooseFile(fileChooser.files));
  };

  var fileReaderLoadHandler = function (evt) {
    setPreview(evt.currentTarget);
  };

  var fileChooserDragOverHandler = function (evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  };

  var fileChooserDropHandler = function (evt) {
    evt.preventDefault();
    readFile(chooseFile(evt.dataTransfer.files));
  };

  // Элементы
  // ---------------
  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  // Старт
  // ---------------
  fileChooser.addEventListener('change', fileChooserChangeHandler);
  fileChooser.addEventListener('dragover', fileChooserDragOverHandler);
  fileChooser.addEventListener('drop', fileChooserDropHandler);

})();
