'use strict'

/**
 * Parent tab container element API
 *
 * @typedef BlessedTabContainerAPI
 * @property {Function} setDirty - modify the dirty flag for a specified tab
 * @property {Function} generateLabel - internal helper that is used to render
 *   the label shared by all tabs
 * @property {Function} setVisibleTab - takes a label, hides all other tabs and
 *   re-renders the shared label
 * @property {BlessedTabContainerTabState[]} tabs - array of tab states
 */
