'use strict'

const setDirty = require('./set_dirty')
const isDirty = require('./is_dirty')

require('../../types/blessed_tab_container_state')
require('../../types/blessed_tab_container_tab_state')
require('../../types/blessed_tab_container_tab_api')

/**
 * Generates a mapping of API functions to be attached to a tab element
 *
 * @private
 * @param {object} args - arguments
 * @param {BlessedTabContainerTabState} args.tab - tab with element to generate API for
 * @param {BlessedTabContainerState} args.state - parent container state
 * @returns {BlessedTabContainerTabAPI} API
 */
const genTabAPI = ({ tab = {}, state = {} }) => ({
  setAutoDirty: autoDirty => { tab.elm.autoDirty = autoDirty },
  setDirty: tabDirty => setDirty({ state, tabDirty, ...tab }),
  isDirty
})

module.exports = genTabAPI
