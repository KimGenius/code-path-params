module.exports = {
  // Map of hooks
  hooks: {},
  // Map of new blocks
  blocks: {
    codepath: {
      process: function (block) {
        const splitStr = '+pp+'
        let result = '<pre>'
        block.body.split(splitStr).forEach((e, i) => {
            if (i === 0) {
              result += e
            } else {
              result += '<span style="color:#ec407a; font-weight:bold; font-style: italic;">' + e + '</span>'
            }
          }
        )
        result += '</pre>'
        console.log(result)
        return result
      }
    }
  },
  // Map of new filters
  filters: {}
}
