'use strict'

const _isEmpty = require('lodash/isEmpty')

const initTabs = require('./util/init_tabs')
const parseArgs = require('./args/parse')
const validateArgs = require('./args/validate')
const updateLabels = require('./util/update_labels')
const genContainerAPI = require('./api/gen_container')

require('../types/blessed_tab_container_args')
require('../types/blessed_tab_container')

/**
 * Merges multiple elements into the same position on the screen, while only
 * enabling visiblity for one at a time depending on the active tab.
 *
 * Renders tabs in different styles depending on if they are visible, hidden, or
 * hidden and modified (dirty).
 *
 * Dirty flags are automatically cleared when tabs are opened, and set when they
 * are updated in the background, unless the `autoDirty` flag is explicity set
 * to `false` for that individual tab.
 *
 * A basic API is exposed on both the individual tab elements themselves, and
 * on the root tabbed container element.
 *
 * @see BlessedTabContainerAPI
 * @see BlessedTabContainerTabAPI
 *
 * @param {BlessedTabContainerArgs} options - tab container options
 * @return {BlessedTabContainer}
 */
const BlessedTabContainer = (options = {}) => {
  const config = parseArgs(options)
  const validationError = validateArgs(config)

  if (!_isEmpty(validationError)) {
    throw new Error(validationError)
  }

  const { screen } = config
  const visible = config.defaultVisible || (
    (config.tabs[0] || {}).label || ''
  )

  const state = { config, visible, screen }

  state.tabs = initTabs(state)

  Object.assign(state, genContainerAPI(state))
  updateLabels(state)

  return state
}

module.exports = BlessedTabContainer
