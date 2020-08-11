import { When } from "cucumber";
import search from "../../support/actions/search";

When(/^The user enters "(.*)" into the search bar$/, (keyword) => {
  browser.clearLocalStorage;
  search(keyword);
});

// .\node_modules\.bin\wdio .\wdio.conf.js
