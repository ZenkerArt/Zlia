// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (location.href.includes('-ru')) {
        return
    }
    const words = ['-ru', '-и']

    const url = new URLSearchParams(location.search)
    url.set('q', `${url.get('q')} ${words.join(' ')}`)
    location.href = `/search?${url.toString()}`
})();
