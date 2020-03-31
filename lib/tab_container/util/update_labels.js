'use strict'

const resolveElm = require('./resolve_elm')

/**
 * Sets the same label on all tab components. Only one component is assumed to
 * be visible at any point in time.
 *
 * @private
 * @param {BlessedTabContainerState} state
 */
const updateLabels = (state = {}) => {
  const { tabs = [], generateLabel } = state
  const text = generateLabel(state)

  tabs
    .map(resolveElm)
    .filter(elm => !!elm)
    .forEach(elm => elm.setLabel({
      style: 'left',
      text
    }))
}

module.exports = updateLabels
