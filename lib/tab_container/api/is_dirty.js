'use strict'

const resolveElm = require('../util/resolve_elm')

/**
 * Checks if the underlying element for the provided object is marked as dirty
 *
 * @private
 * @param {object|BlessedTabContainerTabState|BlessedTabContainerConfig} obj
 * @return {boolean} dirty
 */
const isDirty = (obj = {}) => {
  const elm = resolveElm(obj) || {}
  return !!elm._tabDirty
}

module.exports = isDirty
