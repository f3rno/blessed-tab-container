'use strict'

const _isFunction = require('lodash/isFunction')
const _includes = require('lodash/includes')
const _isObject = require('lodash/isObject')
const _isString = require('lodash/isString')
const _isFinite = require('lodash/isFinite')
const _isArray = require('lodash/isArray')

require('../../types/blessed_tab_container_args')

/**
 * Verifies arguments for BlessedTabContainer
 *
 * @private
 * @param {BlesssedTabContainerArgs} [args] - arguments
 * @return {string|null} error - null if arguments are valid
 */
const validateArgs = (args = {}) => {
  const {
    defaultVisible, tabSeperator, autoDirtyUpdateFunctions, inactiveColorFunc,
    activeColorFunc, dirtyColorFunc, cleanColorFunc, tabPadding, tabPaddingChar,
    elementOptions
  } = args

  const { tabs = [] } = args
  const tabLabels = tabs.map(t => t.label)

  if (!_includes(tabLabels, defaultVisible)) {
    return [
      `Visible tab label not present in tab set: ${defaultVisible}`,
      `(options ${tabLabels.join(', ')})`
    ].join(' ')
  } else if (!_isString(tabSeperator)) {
    return 'Tab seperator must be a string'
  } else if (
    !_isArray(autoDirtyUpdateFunctions) ||
    !!autoDirtyUpdateFunctions.find(f => !_isString(f))
  ) {
    return 'Auto-dirty update functions must be an array of strings'
  } else if (
    !_isFunction(inactiveColorFunc) ||
    !_isFunction(activeColorFunc) ||
    !_isFunction(dirtyColorFunc) ||
    !_isFunction(cleanColorFunc)
  ) {
    return 'Active/inactive/dirty/clean formatters must be functions'
  } else if (!_isFinite(tabPadding)) {
    return `Tab padding must be a number (got ${tabPadding})`
  } else if (tabPadding < 0) {
    return `Tab padding cannot be negative (got ${tabPadding})`
  } else if (!_isObject(elementOptions)) {
    return 'Parsed non-object element options, check your input'
  } else if (!_isString(tabPaddingChar)) {
    return 'Tab padding character must be a string'
  }

  return null
}

module.exports = validateArgs
