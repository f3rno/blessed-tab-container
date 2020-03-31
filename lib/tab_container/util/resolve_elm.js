'use strict'

/**
 * Attempts to find the underlying blessed component on the provided object. If
 * an array of tabs is detected, the tab with a label matched the object's
 * top-level label if used.
 *
 * @private
 * @param {object|BlessedTabContainerTab|BlessedTabContainerConfig} obj
 * @return {BlessedComponent} elm
 */
const resolveElm = (obj = {}) => (
  obj.getLines
    ? obj
    : obj.elm
      ? obj.elm
      : obj.tab
        ? obj.tab.elm
        : ((obj.tabs || []).find(t => t.label === obj.label) || {}).elm
)

module.exports = resolveElm
