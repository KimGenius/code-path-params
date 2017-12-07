'use strict'
module.exports = {
  // Map of hooks
  hooks: {
    "page": function (page) {
      page.content = page.content
        .replace(/{/gi, '</pre><pre><var><span style="color:#ec407a;font-weight:bold;font-style:italic;">')
        .replace(/}/gi, '</span></var></pre><pre>')
      return page;
    }
  }
}
