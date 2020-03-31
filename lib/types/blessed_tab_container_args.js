'use strict'

require('../types/blessed_tab_container_tab_config')

/**
 * Verifies arguments for BlesssedTabContainer
 *
 * @typedef BlessedTabContainerArgs
 * @property {object} screen - blessed screen instance
 * @property {string} [defaultVisible] - label visible by default, must exist
 *   as a tab label. Uniqueness not enforced.
 * @property {string} [tabSeperator] - seperater rendered between tab labels
 * @property {number} [tabPadding] - number of chars to pad with on either
 *   side of the seperator. Default 1
 * @property {string} [tabPaddingChar] - character used to pad labels, not
 *   colored. Defaults to a single space, and appears on either side of each
 *   seperator.
 * @property {string[]} [autoDirtyUpdateFunctions] - array of function names
 *   that should be wrapped to automatically set the dirty flag on a tab. i.e.
 *   ['pushLine', 'setContent', ...]
 * @property {Function} [inactiveColorFunc] - color function for inactive tab
 * @property {Function} [activeColorFunc] - color function for active tab
 * @property {Function} [dirtyColorFunc] - color function for dirty tab,
 *   applied to active/inactive color function output
 * @property {Function} [cleanColorFunc] - color function for clean tab,
 *   applied to active/inactive color function output
 * @property {BlessedTabContainerTabState[]} [tabs] - array of tab objects
 * @property {object} [elementOptions] - configuration object passed to tabFunc
 *   if needed; if provided, should be valid for the desired blessed element.
 */
