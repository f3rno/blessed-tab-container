'use strict'

/**
* Blessed Tab Container Tab Configuration Object, passed to initTabs(). Note
* no underlying 'elm' element yet, as it must be constructed from tab or tabFunc
*
* Used to create BlessedTabContainerTabState, hence similar
*
* @typedef BlessedTabContainerTabConfig
* @property {string} label - tab label, used as clickable tab, highlighted
*   based on active/inactive/dirty/clean status and configured color functions.
* @property {object} tab - the tab element itself, should be a configured
*   blessed component
* @property {Function} [tabFunc] - alertnative to the 'tab' key; executed with
*   the provided element options to create a dynamic component.
* @property {boolean} [autoDirty] - default true, enables automatic updating of
*   the dirty flag by tapping all content modification functions be default.
*   For control over this, pass a custom `autoDirtyUpdateFunctions` array to
*   the tabbed container constructor
*/
