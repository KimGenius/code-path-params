'use strict'
module.exports = {
  // Map of hooks
  hooks: {
    "page": function (page) {
      page.content = page.content
        .replace(/{/gi,'<span style="color:#ec407a;font-weight:bold;font-style:italic;"> ')
        .replace(/}/gi,' </span>')
      return page;
    }
  }
}
