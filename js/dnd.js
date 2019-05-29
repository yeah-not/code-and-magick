'use strict';

// Drag'n'Drop API
// Магазин артефактов в окне настройки
// ---------------

(function () {
  var isElementEmpty = function (element) {
    return element.childNodes.length === 0;
  }

  // Обработчики
  // ---------------
  var shopDragStartHandler = function (evt) {
    var target = evt.target;

    if (target.tagName.toLowerCase() !== 'img') {
      evt.preventDefault();
      return false;
    }

    dragItem = target;

    evt.dataTransfer.setData('text/plain', target.alt);
    artifactsElement.classList.add('drag-in-progress');
  };

  var artifactsDragOverHanlder = function (evt) {
    evt.preventDefault();
    return false;
  };

  var artifactsDropHandler = function (evt) {
    if (!dragItem || !isElementEmpty(evt.target)) {
      dragItem = null;

      evt.preventDefault();
      return false;
    }

    var dropItem = dragItem.cloneNode(true);
    dragItem = null;
    // console.log(dropItem.draggable = false);

    evt.target.appendChild(dropItem);
    evt.target.classList.remove('drag-over');
    artifactsElement.classList.remove('drag-in-progress');
  };

  var artifactsDragEnter = function (evt) {
    evt.preventDefault();

    if (!dragItem || !isElementEmpty(evt.target)) {
      return false;
    }

    evt.target.classList.add('drag-over');
  };

  var artifactsDragLeave = function (evt) {
    evt.preventDefault();

    if (!dragItem) {
      return false;
    }

    evt.target.classList.remove('drag-over');
  };

  // Элементы
  // ---------------
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var dragItem = null;

  // Старт
  // ---------------
  shopElement.addEventListener('dragstart', shopDragStartHandler);
  artifactsElement.addEventListener('dragover', artifactsDragOverHanlder);
  artifactsElement.addEventListener('drop', artifactsDropHandler);
  artifactsElement.addEventListener('dragenter', artifactsDragEnter);
  artifactsElement.addEventListener('dragleave', artifactsDragLeave);
})();
