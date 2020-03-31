'use strict'

const resolveElm = require('../util/resolve_elm')
const updateLabels = require('../util/update_labels')

/**
 * Updates the dirty flag for the underlying element if it is not already dirty
 * and it is not the currently visible tab. The primary label is redrawn.
 *
 * @private
 * @param {object|BlessedTabContainerTab|BlessedTabContainerConfig} obj
 */
const setDirty = (obj = {}) => {
  const { tabDirty, label, state = {} } = obj
  const elm = resolveElm(obj)

  if (label !== state.visible) {
    elm._tabDirty = tabDirty
    updateLabels(state)
  }
}

module.exports = setDirty
