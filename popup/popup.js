"use strict";

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
  document.getElementById('popup-content').innerText = forms
}

browser.tabs.query({active: true, currentWindow: true})
        .then(getForms)
        .catch(onError);
