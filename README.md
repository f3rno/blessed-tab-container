# Blessed Tab Container Element

[![Build Status](https://travis-ci.org/f3rno/blessed-tab-container.svg?branch=master)](https://travis-ci.org/f3rno/blessed-tab-container)

A tabbed container for the [`blessed`](https://github.com/chjj/blessed) CLI UI
library. Implements clickable tabs by rendering a tabline as the root element
label, with each label styled to indicate the tabs' active & dirty status.

![preview](/readme_assets/preview.png)

## Features

* Configurable tab styling
* Indicates tab 'dirty' state in label
* Tabs!

## API

The tab container function returns an object with `setVisibleTab(label)` and
`setDirty(tab)` methods. More details can be found in the [`docs/ folder`](/docs)

## Example Usage

```js
const BlessedTabContainer = require('blessed-tab-container')
const blessedContrib = require('blessed-contrib')
const colors = require('colors')

const screen = blessed.screen({ smartCSR: true })

screen.enableInput()
screen.key(['escape', 'q', 'C-c'], () => {
  screen.destroy()
  process.exit(0) // eslint-disable-line
})

const grid = new blessedContrib.grid({
  screen: screen,
  rows: 1,
  cols: 2
})

const tabGroupA = []
const tabGroupB = []

for (let i = 0; i < 2; i += 1) {
  tabGroupA.push(grid.set(0, 0, 1, 1, blessed.element, {
    content: `Content for Tab ${i + 1}`
  }))
}

for (let i = 0; i < 5; i += 1) {
  tabGroupB.push(grid.set(0, 1, 1, 1, blessed.element, {
    content: `Content for Tab ${i + 1}`
  }))
}

const tabContainerSettings = {
  screen,
  tabSeperator: ' | ',
  activeColorFunc: colors.bgBrightBlue.black,
  dirtyColorFunc: colors.underline
}

const tabContainerA = BlessedTabContainer({
  ...tabContainerSettings,
  defaultVisible: 'Tab 1',
  tabs: tabGroupA.map((t, i) => ({
    label: `Tab ${i + 1}`,
    component: t
  }))
})

const tabContainerB = BlessedTabContainer({
  ...tabContainerSettings,
  defaultVisible: 'Tab 1',
  tabs: tabGroupB.map((t, i) => ({
    label: `Tab ${i + 1}`,
    component: t
  }))
})

// Do something with the containers
tabContainerA.setVisibleTab('Tab 2')
tabContainerB.setVisibleTab('Tab 4')

screen.render()
```

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
