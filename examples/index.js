'use strict'

const BlessedTabContainer = require('../')
const blessedContrib = require('blessed-contrib')
const blessed = require('blessed')
const colors = require('colors')

const screen = blessed.screen({ smartCSR: true })

screen.enableInput()
screen.key(['escape', 'q', 'C-c'], () => {
  screen.destroy()
  process.exit(0) // eslint-disable-line
})

const grid = new blessedContrib.grid({ // eslint-disable-line
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
