'use strict'

/**
 * Blessed Tab Container State Object
 *
 * @typedef BlessedTabContainerState
 * @property {BlessedTabState[]} tabs - array of tabs that belong to the
 *   container
 * @property {Function} [tabFunc] - alertnative to the 'tab' key; executed with
 *   the provided element options to create a dynamic component.
 * @property {number} [tabPadding] - number of characters to pad on either side
 *   of each tab seperator; default 1
 * @property {string} [tabPaddingChar] - tab padding character, default space
 * @property {boolean} [autoDirty] - default true, enables automatic updating of
 *   the dirty flag by tapping all content modification functions be default.
 *   For control over this, pass a custom `autoDirtyUpdateFunctions` array to
 *   the tabbed container constructor
 */
