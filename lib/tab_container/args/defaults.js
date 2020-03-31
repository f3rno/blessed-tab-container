'use strict'

const colors = require('colors')

/**
 * Default argument values
 *
 * @private
 */
const defaultArgs = {
  tabs: [],
  tabSeperator: '|',
  tabPadding: 1,
  tabPaddingChar: ' ',
  inactiveColorFunc: colors.gray,
  activeColorFunc: colors.bgBrightBlue.black,
  dirtyColorFunc: colors.underline,
  cleanColorFunc: l => l,
  autoDirtyUpdateFunctions: [
    'setText', 'setContent', 'pushLine', 'insertLine', 'setLine', 'setBaseLine',
    'clearLine', 'clearBaseLine', 'insertTop', 'insertBottom', 'deleteTop',
    'deleteBottom', 'unshiftLine', 'shiftLine', 'popLine'
  ]
}

module.exports = defaultArgs
