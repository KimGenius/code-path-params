'use strict'
module.exports = {
  hooks: {
    "page": function (page) {
      page.content = page.content
      //code태그를 쓰면 안에 내용이 다 적용이 안되므로 바꿔줘야함
        .replace(/<code>/gi, "<span>")
        .replace(/<\/code>/gi, "</span>")
        .replace(/{/gi, '<var><span style="color:#ec407a;font-weight:bold;font-style:italic;">{')
        .replace(/}/gi, '}</span></var>')
      return page;
    }
  }
}
