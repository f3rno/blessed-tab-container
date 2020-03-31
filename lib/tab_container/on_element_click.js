'use strict'

/**
 * Handles tab switching on click, calculating hit based on element size and
 * position.
 *
 * @private
 * @param {object} args - arguments
 * @param {object} args.elm - clicked element
 * @param {BlessedTabContainerState} args.state - tabbed container state object
 * @param {number} args.x - mouse x position (chars)
 * @param {number} args.y - mosue y position (chars)
 */
const onElementClick = ({ elm, state, x, y } = {}) => {
  const { config, setVisibleTab, tabs = [] } = state
  const { tabSeperator, tabPadding, tabPaddingChar } = config

  const { left, top } = elm
  const tx = x - left
  const ty = y - top
  const labelOffset = 2 // depends on position, for now only left supported

  if (ty !== 0) {
    return
  }

  const labels = (tabs || []).map(({ label }) => label)
  let labelLength = 0

  // TODO: Handle alternate label positioning, not just left
  for (let i = 0; i < labels.length; i += 1) {
    const start = labelOffset + labelLength
    const label = labels[i]

    if (tx >= start && tx < (start + label.length)) {
      setVisibleTab(label).setDirty(false)
      return
    }

    labelLength += label.length

    if (i < labels.length - 1) {
      labelLength += tabSeperator.length + ((tabPadding * tabPaddingChar.length) * 2)
    }
  }
}

module.exports = onElementClick
