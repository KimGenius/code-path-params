module.exports = {
  // Map of hooks
  hooks: {},
  book: {
    assets: './assets',
    css: [
      'codetabs.css'
    ],
    js: [
      'codetabs.js'
    ]
  },
  // Map of new blocks
  blocks: {
    code-path: {
      blocks: ['code-path'],
      process: function (parentBlock) {
        var blocks = [parentBlock].concat(parentBlock.blocks)
        return '<b>' + blocks + '</b>'
      }
    }
  }
  // Map of new filters
  filters: {}
}
