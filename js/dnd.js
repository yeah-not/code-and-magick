'use strict';

// Магазин артефактов в окне настройки
// Drag'n'Drop API
// ---------------

(function () {
  // Функции
  // ---------------
  var startArtifactDrag = function (evt) {
    var target = evt.target;

    evt.dataTransfer.setData('text/plain', target.alt);
    setDropEffect(target, evt);
    toggleArtifactsHighlight(true);

    artifactsElement.addEventListener('drop', artifactsDropHandler);
    artifactsElement.addEventListener('dragover', artifactsDragOverHanlder);
    artifactsElement.addEventListener('dragenter', artifactsDragEnter);
    artifactsElement.addEventListener('dragleave', artifactsDragLeave);

    if (!target.closest(shopSelector)) {
      document.addEventListener('drop', documentDropHandler);
      document.addEventListener('dragover', documentDragOverHanlder);
    }

    return target;
  };

  var dropArtifact = function (target) {
    artifactsElement.removeEventListener('drop', artifactsDropHandler);
    artifactsElement.removeEventListener('dragover', artifactsDragOverHanlder);
    artifactsElement.removeEventListener('dragenter', artifactsDragEnter);
    artifactsElement.removeEventListener('dragleave', artifactsDragLeave);
    document.removeEventListener('drop', documentDropHandler);
    document.removeEventListener('dragover', documentDragOverHanlder);

    toggleArtifactsHighlight(false);

    var dropItem = dragItem;

    if (dragItem.closest(shopSelector)) {
      dropItem = dragItem.cloneNode(true);
    }

    if (target === document) {
      dropItem.remove();
      return null;
    }

    target.appendChild(dropItem);
    toggleCellHighlight(target, false);

    return null;
  };

  var toggleCellHighlight = function (cell, toggleOn) {
    if (toggleOn) {
      cell.classList.add('drag-over');
    } else {
      cell.classList.remove('drag-over');
    }
  };

  var toggleArtifactsHighlight = function (toggleOn) {
    if (toggleOn) {
      artifactsElement.classList.add('drag-in-progress');
    } else {
      artifactsElement.classList.remove('drag-in-progress');
    }
  };

  var setDropEffect = function (item, evt) {
    if (item.closest(shopSelector)) {
      evt.dataTransfer.dropEffect = 'copy';
    } else {
      evt.dataTransfer.dropEffect = 'move';
    }
  };

  // Обработчики
  // ---------------
  var shopDragStartHandler = function (evt) {
    if (window.util.isElementTag(evt.target, 'img')) {
      dragItem = startArtifactDrag(evt);
    }
  };

  var artifactsDragStartHandler = function (evt) {
    if (window.util.isElementTag(evt.target, 'img')) {
      dragItem = startArtifactDrag(evt);
    }
  };

  var artifactsDropHandler = function (evt) {
    var target = evt.target;

    if (!window.util.isElementTag(target, 'img') && window.util.isElementEmpty(target)) {
      dragItem = dropArtifact(target);
    }
  };

  var artifactsDragOverHanlder = function (evt) {
    evt.preventDefault();
    setDropEffect(dragItem, evt);
    return false;
  };

  var artifactsDragEnter = function (evt) {
    evt.preventDefault();

    if (window.util.isElementEmpty(evt.target)) {
      toggleCellHighlight(evt.target, true);
    }
  };

  var artifactsDragLeave = function (evt) {
    evt.preventDefault();
    toggleCellHighlight(evt.target, false);
  };

  var documentDropHandler = function (evt) {
    dragItem = dropArtifact(evt.currentTarget);
  };

  var documentDragOverHanlder = function (evt) {
    evt.preventDefault();
    return false;
  };

  // Переменные и Элементы
  // ---------------
  var shopSelector = '.setup-artifacts-shop';
  var shopElement = document.querySelector(shopSelector);
  var artifactsElement = document.querySelector('.setup-artifacts');
  var dragItem = null;

  // Старт
  // ---------------
  shopElement.addEventListener('dragstart', shopDragStartHandler);
  artifactsElement.addEventListener('dragstart', artifactsDragStartHandler);
})();
