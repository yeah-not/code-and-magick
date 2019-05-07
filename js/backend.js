'use strict';

// Взаимодействие с сервером
// ---------------

(function () {
  // Константы
  // ---------------
  var URL = 'https://js.dump.academy/code-and-magick/data/';

  var xhrErrorHandler = function (onError) {
    if (typeof onError === 'function') {
      onError('Ошибка соединения с сервером');
    }
  };

  var xhrTimeoutHandler = function (xhr, onError) {
    if (typeof onError === 'function') {
      onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
    }
  };

  var xhrLoadHandler = function (xhr, onLoad, onError) {
    var error = '';

    switch (xhr.status) {
      case 200:
        if (typeof onLoad === 'function') {
          onLoad(xhr.response);
        }
        break;
      case 400:
        error = 'Неверный запрос ' + xhr.status;
        break;
      case 401:
        error = 'Пользователь не авторизован ' + xhr.status;
        break;
      case 404:
        error = 'Ничего не дайдено ' + xhr.status;
        break;
      default:
        error = 'Статус ответа: ' + xhr.status + ' ' + xhr.statusText;
    }

    if (error && typeof onError === 'function') {
      onError(error);
    }
  };

  // Интрефейс
  // ---------------
  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = 3000;

      xhr.addEventListener('load', xhrLoadHandler.bind(this, xhr, onLoad, onError));
      xhr.addEventListener('error', xhrErrorHandler.bind(this, onError));
      xhr.addEventListener('timeout', xhrTimeoutHandler.bind(this, xhr, onError));

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
