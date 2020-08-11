import searchResultsPage from "../../pages/SearchResults";
/**
 * Ensure link text includes keyword
 *
 * @param {String} keyword Search keyword
 */
import assert from "assert";

export default (keyword) => {
  searchResultsPage.SearchResultsLinks.forEach((link) => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      assert(
        linkText.includes(keyword),
        `Link ${linkText} does not include ${keyword}`
      );
    }
  });
};
