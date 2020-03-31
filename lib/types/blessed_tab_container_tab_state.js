'use strict'

/**
* Blessed Tab Container Tab State Object, holds data for tab managemnet
*
* @typedef BlessedTabContainerTabState
* @property {string} label - tab label, used as clickable tab, highlighted
*   based on active/inactive/dirty/clean status and configured color functions.
* @property {object} elm - the underlying blessed element
* @property {boolean} elm.autoDirty - live autoDirty flag state
*/
