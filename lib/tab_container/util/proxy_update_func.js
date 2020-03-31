'use strict'

const _isFunction = require('lodash/isFunction')

/**
 * Proxies the specified function name on the provided element, and sets the
 * dirty flag if autoDirty is not disabled, on each call of the function.
 *
 * Element must have `setDirty()` function attached; it is configured
 * automatically by the BlessedTabContainer.
 *
 * @private
 * @param {object} elm - base element object
 * @param {string} funcName - name of function to trigger dirty flag for. Will
 *   be alias'ed and wrapped.
 * @param {BlessedTabContainerState} [state] - state
 * @returns {Error} error - null if function is found and wrapped, error
 *   otherwise
 */
const proxyUpdateFunc = (elm, funcName, state = {}) => {
  if (!_isFunction(elm[funcName])) {
    return new Error(`No such function on element: ${funcName}`)
  }

  elm[`_${funcName}`] = elm[funcName]
  elm[funcName] = (...args) => {
    elm[`_${funcName}`](...args)

    if (_isFunction(elm.setDirty) && elm.autoDirty !== false) {
      elm.setDirty(true)
    }
  }

  return null
}

module.exports = proxyUpdateFunc
