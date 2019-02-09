import React, {Component} from 'react'
import blessed from 'blessed'
import {render} from 'react-blessed'
import chalk from 'chalk'
import parseColor from 'parse-color'

var themeColor = parseColor('green').hex

/**
 * stylesheet
 */
const stylesheet = {
  bordered: {
    border: {
      type: 'line'
    },
    style: {
      border: {
        fg: themeColor
      }
    }
  }
}

/**
 * Top level component.
 */
class Dashboard extends Component {
  render() {
    return (
      <element>
        <box>
          <Log />
          <Command />
          <Detail />
          <System />
          <State />
        </box>
      </element>
    )
  }
}

/**
 * Log component.
 */
class Log extends Component {
  render() {
    return (
      <box label={chalk.bgHex(themeColor)(chalk.black(` Log `))}
           class={stylesheet.bordered}
           width="70%"
           height="70%">
        { `\n${chalk.hex(themeColor)(` Hello World`)}` }
      </box>
    )
  }
}

/**
 * Command component.
 */
class Command extends Component {
  render() {
    return (
      <box label={chalk.bgHex(themeColor)(chalk.black(` Command `))}
           class={stylesheet.bordered}
           top="70%"
           width="35%">
        { `\n${chalk.hex(themeColor)(` /Commands`)}` }
      </box>
    )
  }
}

/**
 * Detail component.
 */
class Detail extends Component {
  render() {
    return <box label={chalk.bgHex(themeColor)(chalk.black(` Detail `))}
              class={stylesheet.bordered}
              top="70%"
              left="35%"
              width="35%" />;
  }
}

/**
 * System component.
 */
class System extends Component {
  render() {
    return <box label={chalk.bgHex(themeColor)(chalk.black(` System `))}
                class={stylesheet.bordered}
                left="70%"
                width="30%"
                height="70%" />;
  }
}

/**
 * State component.
 */
class State extends Component {
  render() {
    return (
      <box label={chalk.bgHex(themeColor)(chalk.black(` State `))}
           class={stylesheet.bordered}
           top="70%"
           left="70%"
           width="30%"
           height="30%">
        { `\n${chalk.hex(themeColor)(` All Good`)}` }
      </box>
    )
  }
}

class Form {
    constructor(){
        /**
         * Rendering the screen.
         */
        const screen = blessed.screen({
          autoPadding: true,
          smartCSR: true,
          title: 'react-blessed dashboard'
        })

        screen.key(['escape', 'q', 'C-c'], function(ch, key) {
          return process.exit(0);
        });
        render(<Dashboard />, screen);
    }
}

module.exports = Form