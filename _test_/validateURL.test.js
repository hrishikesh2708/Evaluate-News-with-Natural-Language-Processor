import { isValidURL } from '../src/client/js/validateURL.js';

test("test isValidURL", () => {
    expect(isValidURL('https://review.udacity.com/#!/reviews/2354706')).toBeTruthy();
});