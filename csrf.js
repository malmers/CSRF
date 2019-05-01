"use strict";

function getForms() {
  var forms = Array.from(document.getElementsByTagName("form"))
                 .filter(form => form.method !== "get");

  forms = forms.filter(form =>
    Array.from(form.getElementsByTagName('input'))
        .every(input => input.type !== "hidden"));
  
  return forms;
}

browser.runtime.sendMessage({"forms": getForms().length + ""});

browser.runtime.onMessage.addListener(message => {
  var forms = getForms();
  var actions = forms.map(e => e.action);
  var methods = forms.map(e => e.method);
  return Promise.resolve({actions: actions, methods: methods});
});
