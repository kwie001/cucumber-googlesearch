import { Then } from "cucumber";
import verifyLinkContain from "../../support/assertions/verifyLinksContain";

Then(/^Links related to "(.*)" are shown on the results page$/, (keyword) => {
  verifyLinkContain(keyword);
});
