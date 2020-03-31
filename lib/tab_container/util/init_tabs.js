'use strict'

const _isFunction = require('lodash/isFunction')
const proxyUpdateFunc = require('./proxy_update_func')
const genTabAPI = require('../api/gen_tab')
const onElementClick = require('../on_element_click')

/**
 * Sets up autoDirty wrapper functions for all tab elements, hides all but the
 * currently visible tab, and generates/attaches the API interfaces for each tab.
 *
 * @private
 * @param {BlessedTabContaineState} state - parent container config object
 * @return {BlessedTabState[]} tabs - array of tab states
 */
const initTabs = (state = {}) => {
  const { config = {} } = state
  const { tabs = [] } = config

  return tabs.map((tabOptions = {}) => {
    const { label, component, autoDirty, tabFunc } = tabOptions

    if (!component && !_isFunction(tabFunc)) {
      throw new Error(`Tab ${label} missing component`)
    }

    const elm = component || tabFunc(state)
    const proxyElmUpdateFunc = (elm, funcName) => (
      proxyUpdateFunc(elm, funcName, state)
    )

    // save autoDirty setting on underlying element, next to the dirty flag itself
    elm.autoDirty = autoDirty
    elm.on('click', mouse => onElementClick({ state, elm, ...mouse }))

    // Setup tabDirty flag updates
    config.autoDirtyUpdateFunctions.forEach(name => proxyElmUpdateFunc(elm, name))

    if (label === state.visible) {
      elm.show()
    } else {
      elm.hide()
    }

    const tab = { elm, label }
    const api = genTabAPI({ tab, state })

    // Methods are available on the underlying element as well as the tab itself
    Object.assign(tab, api)
    Object.assign(elm, api)

    return tab
  })
}

module.exports = initTabs
