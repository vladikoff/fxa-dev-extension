'use strict';

/*global chrome:false */

function runScripts(tab, script, cb) {
  chrome.tabs.executeScript(tab.id, {
    code: script
  }, cb);
}

chrome.browserAction.onClicked.addListener(function(aTab) {
  var email = 'fxatester' + Math.random() + '@restmail.net';

  if (aTab.url.indexOf('/signup') === -1) {
    return;
  }

  runScripts(aTab, 'document.querySelectorAll(".email")[0].value="' + email + '"');
  runScripts(aTab, 'document.querySelectorAll(".password")[0].value="password"');
  runScripts(aTab, 'document.querySelectorAll("#age")[0].value=22');
  runScripts(aTab, 'document.querySelectorAll(".show-password-label")[0].click()');
  runScripts(aTab, 'document.querySelectorAll("#submit-btn")[0].click()');

  // if localhost then we cannot use restmail, we use the mail_helper locally
  if (aTab.url.indexOf('127.0.0.1') >= 0 || aTab.url.indexOf('localhost') >= 0) {
    return;
  }

  setTimeout(function () {
    chrome.tabs.create({'url': 'http://restmail.net/mail/' + email, 'active': true}, function (tab) {
      setTimeout(function () {
        var verifyScript = '' +
          'var u = JSON.parse(document.querySelectorAll("pre")[0].innerHTML)[0].headers["x-link"];' +
          'var elem = document.createElement("textarea");' +
          'elem.innerHTML = u;' +
          'location.href = elem.value;';
        runScripts(tab, verifyScript);
      }, 1000)

    });
  }, 5000);

});
