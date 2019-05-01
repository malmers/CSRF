function updateBadge(message, sender) {
  badge = message.forms;
  if(badge === "0") {
    badge = "";
  }

  browser.browserAction.setBadgeText({text: badge, tabId: sender.tab.id});
}

browser.runtime.onMessage.addListener(updateBadge);
