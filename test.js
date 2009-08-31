function w(name, element) {
  document.write(name + ': ' + (
    isEventSupported(name, element)
      ? '<span style="background-color:green;color:white;">true</span>' 
      : '<span style="background-color:red;color:white;">false</span>'
    ) + '<br>');
}

document.write('<pre>' + isEventSupported + '</pre><br><br>');

document.write('<h2>Mouse events:</h2>');

w('click');
w('dblclick');
w('mousedown');
w('mouseup');
w('mouseover');
w('mousemove');
w('mouseout');

document.write('<h2>Key events:</h2>');

w('keypress');
w('keydown');
w('keyup');

document.write('<h2>HTML events</h2>');

w('load');
w('unload', typeof window.onunload != 'undefined' ? window : void 0 );
w('abort');
w('error');

document.write('<h2>View events</h2>');

w('resize');
w('scroll');

document.write('<h2>Form events:</h2>');

w('submit');
w('reset');

document.write('<h2>Form controls\' events:</h2>');

w('select');
w('change');

document.write('<h2>Activation events:</h2>');

w('focus');
w('blur');

document.write('<h2>MSHTML DOM events:</h2>');

w('cut');
w('copy');
w('paste');
w('beforecut');
w('beforecopy');
w('beforepaste');
w('afterupdate');
w('beforeupdate');
w('cellchange');
w('dataavailable');
w('datasetchanged');
w('datasetcomplete');
w('errorupdate');
w('rowenter');
w('rowexit');
w('rowsdelete');
w('drag');
w('dragstart');
w('dragenter');
w('dragover');
w('dragleave');
w('dragend');
w('drop');
w('selectstart');
w('mouseenter');
w('mouseleave');
w('activate');
w('beforeactivate');
w('deactivate');
w('beforedeactivate');
w('focusin');
w('focusout');
w('stop', document);
w('readystatechange');
w('beforeprint', document.body);
w('afterprint', document.body);
w('beforeunload', typeof window.onbeforeunload != 'undefined' ? window : void 0 );

document.write('<h2>Unexistent (most likely) events:</h2>');

w('click2');
w('foobarbaz');

document.write('<h2>Unexistent in Opera <=10a</h2>');

w('contextmenu');

document.write('<h2>iPhone touch/gesture events</h2>');

w('touchstart');
w('touchend');
w('touchmove');
w('touchcancel');

document.write('<br>');

w('gesturestart');
w('gesturechange');
w('gestureend');

document.write('<h2>HTML5 events</h2>');

w('hashchange', document.body);
w('online', document.body);
w('offline', document.body);
w('message', typeof window.onmessage != 'undefined' ? window : void 0 );