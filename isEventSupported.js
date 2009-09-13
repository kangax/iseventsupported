/**
 * @method isEventSupported
 * @param {String} eventName
 * @param {HTMLElement} element optional
 * @return {Boolean} true if event is supported
 *
 * Note that `isEventSupported` can give false positives when passed augmented host objects, e.g.:
 * 
 *     someElement.onfoo = function(){ };
 *     isEventSupported('foo', someElement); // true (even if "foo" is not supported)
 *
 * Also note that in Gecko clients (those that utilize `setAttribute` -based detection) -
 *
 *     `isEventSupported('foo', someElement)`;
 *
 * - might create `someElement.foo` property (if "foo" event is supported) which apparently can not be deleted
 * `isEventSupported` sets such property to `undefined` value, but can not fully remove it
 *
 */
var isEventSupported = (function(){
  
  var TAGNAMES = {
    'select':'input','change':'input',
    'submit':'form','reset':'form',
    'error':'img','load':'img','abort':'img'
  }, 
  cache = { };
  
  function isEventSupported(eventName, element) {
    var canCache = (arguments.length == 1);
    
    // only return cached result when no element is given
    if (canCache && cache[eventName]) {
      return cache[eventName];
    }
    
    element = element || document.createElement(TAGNAMES[eventName] || 'div');
    eventName = 'on' + eventName;
    
    // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
    var isSupported = (eventName in element);
    
    if (!isSupported && element.setAttribute && element.removeAttribute) {
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] == 'function';
      
      // if property was created, "remove it" (by setting value to `undefined`)
      if (typeof element[eventName] != 'undefined') {
        element[eventName] = void 0;
      }
      element.removeAttribute(eventName);
    }
    
    element = null;
    return canCache ? (cache[eventName] = isSupported) : isSupported;
  }
  return isEventSupported;
})();