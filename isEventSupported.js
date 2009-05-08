/**
 * @method isEventSupported
 * @param {String} eventName
 * @param {HTMLElement} element optional
 * @return {Boolean} true if event is supported
 */
var isEventSupported = (function(){
  var TAGNAMES = {
    'select':'input','change':'input',
    'submit':'form','reset':'form',
    'error':'img','load':'img','abort':'img'
  }, cache = { };
  function isEventSupported(eventName, element) {
    var canCache = arguments.length == 1;
    // only return cached result when no element is given
    if (canCache && cache[eventName]) {
      return cache[eventName];
    }
    var el = element || document.createElement(TAGNAMES[eventName] || 'div');
    eventName = 'on' + eventName;
    // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize"
    // `in` "catches" those
    var isSupported = (eventName in el);
    if (!isSupported) {
      el.setAttribute(eventName, 'return;');
      isSupported = typeof el[eventName] == 'function';
    }
    el = null;
    return canCache ? (cache[eventName] = isSupported) : isSupported;
  }
  return isEventSupported;
})();