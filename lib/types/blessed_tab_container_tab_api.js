'use strict'

/**
 * Single tab element API
 *
 * @typedef BlessedTabContainerTabAPI
 * @property {Function} setAutoDirty - helper to modify underlying elements'
 *   autoDirty flag. If set to 'false', automatic dirty flag updates are disabled
 * @property {Function} setDirty - modify the tab's dirty flag directly, triggers
 *   a re-render
 * @property {Function} isDirty - query the tab's dirty flag
 */
