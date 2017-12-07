'use strict'
module.exports = {
  // Map of hooks
  hooks: {
    "page": function (page) {
      page.content = page.content.replace(/{/gi,'<span style="color:#ec407a; font-weight:bold; font-style: italic;">asdf</span>')
      // page.content.getElementById('resource-url').nextSibling.childNodes.innerHTML
      //   .replace(/{/gi, '<span style="color:#ec407a; font-weight:bold; font-style: italic;">')
      //   .replace(/}/gi, '</span>');
      return page;
    }
  },
  // Map of new filters
  filters: {
    "path": function (path) {
      return '<span style="color:#ec407a; font-weight:bold; font-style: italic;">'+path+'</span>'
    }
  }
}
