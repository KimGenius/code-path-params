module.exports = {
  // Map of hooks
  hooks: {},
  // Map of new blocks
  blocks: {
    codepath: {
      process: function (block) {
        return '<b>' + block.body + '</b>'
      }
    }
  }
  // Map of new filters
  filters: {}
}
