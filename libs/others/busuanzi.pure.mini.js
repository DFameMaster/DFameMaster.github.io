(function () {
  var bszCaller, bszTag;
  var scriptTag = null;

  var ready = function (callback) {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      callback.call(document);
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        callback.call(document);
      });
    }
  };

  bszCaller = {
    fetch: function (url, callback) {
      var callbackName = 'BusuanziCallback_' + Math.floor(1099511627776 * Math.random());
      window[callbackName] = this.evalCall(callback);
      url = url.replace('BusuanziCallback', callbackName);
      scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.defer = true;
      scriptTag.src = url;
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
    },
    evalCall: function (callback) {
      return function (data) {
        ready(function () {
          try {
            callback(data);
            if (scriptTag && scriptTag.parentElement) {
              scriptTag.parentElement.removeChild(scriptTag);
            }
          } catch (e) {
            bszTag.hides();
          }
        });
      };
    }
  };

  bszCaller.fetch('//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback', function (data) {
    bszTag.texts(data);
    bszTag.shows();
  });

  bszTag = {
    bszs: ['site_pv', 'page_pv', 'site_uv'],
    texts: function (data) {
      this.bszs.forEach(function (key) {
        var element = document.getElementById('busuanzi_value_' + key);
        if (element) {
          element.innerHTML = data[key];
        }
      });
    },
    hides: function () {
      this.bszs.forEach(function (key) {
        var element = document.getElementById('busuanzi_container_' + key);
        if (element) {
          element.style.display = 'none';
        }
      });
    },
    shows: function () {
      this.bszs.forEach(function (key) {
        var element = document.getElementById('busuanzi_container_' + key);
        if (element) {
          element.style.display = 'inline';
        }
      });
    }
  };
})();