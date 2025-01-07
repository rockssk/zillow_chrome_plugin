/**
 * Adds a listener that triggers when a tab is updated.
 * If the tab's status is 'complete' and the URL starts with 'http',
 * it injects the 'content.js' script into the tab.
 *
 * @param {number} tabId - The ID of the tab that was updated.
 * @param {Object} changeInfo - An object containing properties about the change.
 * @param {string} changeInfo.status - The status of the tab update.
 * @param {Object} tab - The tab object that was updated.
 * @param {string} tab.url - The URL of the tab that was updated.
 */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
      });
    }
  });
  