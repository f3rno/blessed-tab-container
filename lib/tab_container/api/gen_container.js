
'use strict'

const setVisibleTab = require('./set_visible_tab')
const generateLabel = require('./generate_label')
const setDirty = require('./set_dirty')

require('../../types/blessed_tab_container_state')
require('../../types/blessed_tab_container_api')

/**
 * Generates a mapping of API functions to be attached to a tab element
 *
 * @private
 * @param {BlessedTabContainerState} state - parent element state object
 * @returns {BlessedTabContainerAPI} API
 */
const genContainerAPI = (state = {}) => ({
  setDirty,
  generateLabel,
  tabs: state.tabs,
  setVisibleTab: visibleLabel => setVisibleTab(state, visibleLabel)
})

module.exports = genContainerAPI
