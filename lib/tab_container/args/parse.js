'use strict'

const defaultArgs = require('./defaults')

require('../../types/blessed_tab_container_args')

/**
 * Fills in defaults
 *
 * @private
 * @param {object|BlessedTabContainerArgs} [args] - full defaults available;
 *   element options are gathered via spread operator, but can optionally be
 *   provided explicirty as 'elementOptions'
 * @return {BlessedTabContainerArgs} parsedArgs
 */
const parseArgs = (args = {}) => {
  const {
    tabs,
    tabPadding,
    tabSeperator,
    irtyColorFunc,
    cleanColorFunc,
    tabPaddingChar,
    elementOptions,
    defaultVisible,
    dirtyColorFunc,
    activeColorFunc,
    inactiveColorFunc,
    autoDirtyUpdateFunctions,

    screen,
    ...remElementOptions
  } = {
    ...defaultArgs,
    ...args,

    autoDirtyUpdateFunctions: [
      ...(defaultArgs.autoDirtyUpdateFunctions || []),
      ...(args.autoDirtyUpdateFunctions || [])
    ]
  }

  return {
    autoDirtyUpdateFunctions,
    inactiveColorFunc,
    activeColorFunc,
    dirtyColorFunc,
    cleanColorFunc,
    tabSeperator,
    tabPadding,
    tabPaddingChar,
    tabs,
    screen,
    defaultVisible,
    elementOptions: {
      ...elementOptions,
      ...remElementOptions
    }
  }
}

module.exports = parseArgs
