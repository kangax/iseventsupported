function w(name) {
  document.write(name + ': ' + (
    isEventSupported(name) 
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
w('unload');
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
w('stop');
w('readystatechange');

document.write('<h2>Unexistent (most likely) events:</h2>');

w('click2');
w('foobarbaz');

document.write('<h2>Unexistent in Opera <=10a</h2>');

w('contextmenu');

document.write('<h2>iPhone touch events</h2>');

w('touchstart');
w('touchend');
w('touchmove');
w('touchcancel');