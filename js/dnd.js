'use strict';

// Drag'n'Drop API
// Магазин артефактов в окне настройки
// ---------------

(function () {
  // Функции
  // ---------------
  var startArtifactDrag = function (evt) {
    var target = evt.target;

    evt.dataTransfer.setData('text/plain', target.alt);
    toggleArtifactsHighlight(true);

    artifactsElement.addEventListener('dragover', artifactsDragOverHanlder);
    artifactsElement.addEventListener('drop', artifactsDropHandler);
    artifactsElement.addEventListener('dragenter', artifactsDragEnter);
    artifactsElement.addEventListener('dragleave', artifactsDragLeave);

    return target;
  };

  var dropArtifact = function (target) {
    var dropItem = dragItem;

    if (dragItem.closest(shopSelector)) {
      dropItem = dragItem.cloneNode(true);
    }

    target.appendChild(dropItem);

    toggleCellHighlight(target, false);
    toggleArtifactsHighlight(false);

    artifactsElement.removeEventListener('dragover', artifactsDragOverHanlder);
    artifactsElement.removeEventListener('drop', artifactsDropHandler);
    artifactsElement.removeEventListener('dragenter', artifactsDragEnter);
    artifactsElement.removeEventListener('dragleave', artifactsDragLeave);

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
    if (dragItem && window.util.isElementEmpty(evt.target)) {
      dragItem = dropArtifact(evt.target);
    }
  };

  var artifactsDragOverHanlder = function (evt) {
    evt.preventDefault();
    return false;
  };

  var artifactsDragEnter = function (evt) {
    evt.preventDefault();

    if (dragItem && window.util.isElementEmpty(evt.target)) {
      toggleCellHighlight(evt.target, true);
    }
  };

  var artifactsDragLeave = function (evt) {
    evt.preventDefault();
    toggleCellHighlight(evt.target, false);
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
