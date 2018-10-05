/* ISC (c) 2018+ Jackens * https://github.com/jackens/uuidv1 */

(function (globalCounter, slice) {
  function $ () {
    var nowHex = (1e16 + (1e4 * (+new Date() + 122192928e5)).toString(16))[slice](-16)
    globalCounter %= 4096
    return [nowHex[slice](8, 16), '-', nowHex[slice](4, 8), -1, nowHex[slice](1, 4), -8, (1e3 + (globalCounter++).toString(16))[slice](-3), '-']
      .concat(('' + 1e11).split('').map(function () { return Math.random().toString(16)[2] })).join('')
  }
  window.VOS__uuidv1 = $
})(0, 'slice')
