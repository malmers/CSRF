"use strict";

var form_list = document.getElementById('unsafe_forms');

function onError(error) {
  console.error(`Error: ${error}`);
}

function getForms(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    command: "getForms"
  }).then(response => {
    showForms(response.response)
  }).catch(onError);
}

function showForms(forms) {
  form_list.innerText = forms;
}

browser.tabs.query({active: true, currentWindow: true})
        .then(getForms)
        .catch(onError);
