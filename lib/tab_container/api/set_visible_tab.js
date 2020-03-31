'use strict'

const updateLabels = require('../util/update_labels')

/**
 * Shows the visible tab (selected by label), and hides the rest. Also resets
 * the dirty flag on the visible tab.
 *
 * @private
 * @param {BlessedTabContainerState} state - container state
 * @param {string} visibleLabel - visible tab label
 * @return {BlessedTabContainerTabState} visibleTab
 */
const setVisibleTab = (state = {}, visibleLabel) => {
  const { screen, tabs = [] } = state
  let visibleTab

  state.visible = visibleLabel

  // Reset tab visibility based on new visible tab
  for (let j = 0; j < tabs.length; j += 1) {
    if (tabs[j].label === state.visible) {
      visibleTab = tabs[j]
      tabs[j].elm.show()
      tabs[j].elm.setDirty(false)
    } else {
      tabs[j].elm.hide()
    }
  }

  updateLabels(state)
  screen.render()

  return visibleTab
}

module.exports = setVisibleTab
