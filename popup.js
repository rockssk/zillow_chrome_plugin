/**
 * CAP Rate Calculator Popup Script
 * 
 * This script is executed when the popup for the CAP Rate Calculator extension is loaded.
 * It retrieves the CAP rate from the local storage and displays it in the popup.
 * 
 * Functionality:
 * - Adds an event listener for the 'DOMContentLoaded' event to ensure the DOM is fully loaded before executing the script.
 * - Queries the active tab in the current window using the Chrome Tabs API.
 * - Executes a script in the context of the active tab using the Chrome Scripting API.
 * - The executed script retrieves the CAP rate from the local storage and updates the content of the div with id 'capRate'.
 * 
 * Elements:
 * - document.addEventListener('DOMContentLoaded', callback): Ensures the script runs after the DOM is fully loaded.
 * - chrome.tabs.query(queryInfo, callback): Queries the active tab in the current window.
 * - chrome.scripting.executeScript(details, callback): Executes a script in the context of the specified tab.
 * - document.querySelector(selector): Selects the first element that matches the specified selector.
 * - window.localStorage.getItem(key): Retrieves the value associated with the specified key from the local storage.
 */
document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          let capRate = document.querySelector('#capRate');
          capRate.innerText = `CAP Rate: ${window.localStorage.getItem('capRate')}`;
        }
      });
    });
  });
  