"use strict";

var form_list = document.getElementById('unsafe_forms');

function onError(error) {
  console.error(`Error: ${error}`);
}

function getForms(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    command: "getForms"
  }).then(response => {
    showForms(response.actions, response.methods)
  }).catch(onError);
}

function showForms(actions, methods) {
  var forms = actions.map(function(e, i) {
    return [e, methods[i]];
  });
  form_list.innerHTML = "";
  forms.forEach(e => {
    var a = document.createElement('p');
    a.innerText = e[0] + " " + e[1];
    form_list.appendChild(a);
  });
}

browser.tabs.query({active: true, currentWindow: true})
        .then(getForms)
        .catch(onError);
