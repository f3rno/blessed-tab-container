'use strict'

const NOOP = l => l

/**
 * Generates a label including all tabs, each highlighted based on individual
 * state. Should be rendered at the top of the container element, and made
 * clickable.
 *
 * @private
 * @param {BlessedTabContainerState} state - tabbed container state
 * @return {string} label - complete styled label listing all tabs for tab
 *   container
 */
const generateLabel = (state = {}) => {
  const { config = {}, tabs = [] } = state
  const { tabPadding, tabPaddingChar, tabSeperator } = config
  let padStr = ''

  for (let i = 0; i < tabPadding; i += 1) {
    padStr += tabPaddingChar
  }

  return tabs.map(({ label, elm }) => {
    const dirtyStyle = elm.isDirty()
      ? config.dirtyColorFunc || NOOP
      : config.cleanColorFunc || NOOP

    const baseStyle = elm.visible
      ? config.activeColorFunc || NOOP
      : config.inactiveColorFunc || NOOP

    return elm.visible
      ? baseStyle(label)
      : baseStyle(dirtyStyle(label))
  }).join(`${padStr}${tabSeperator}${padStr}`)
}

module.exports = generateLabel
