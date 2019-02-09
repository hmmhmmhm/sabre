(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "blessed", "react-blessed", "chalk", "parse-color"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("blessed"), require("react-blessed"), require("chalk"), require("parse-color"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.blessed, global.reactBlessed, global.chalk, global.parseColor);
    global.form = mod.exports;
  }
})(this, function (_react, _blessed, _reactBlessed, _chalk, _parseColor) {
  "use strict";

  _react = _interopRequireWildcard(_react);
  _blessed = _interopRequireDefault(_blessed);
  _chalk = _interopRequireDefault(_chalk);
  _parseColor = _interopRequireDefault(_parseColor);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var themeColor = (0, _parseColor.default)('green').hex;
  /**
   * stylesheet
   */

  var stylesheet = {
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
    /**
     * Top level component.
     */

  };

  var Dashboard =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Dashboard, _Component);

    function Dashboard() {
      _classCallCheck(this, Dashboard);

      return _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).apply(this, arguments));
    }

    _createClass(Dashboard, [{
      key: "render",
      value: function render() {
        return _react.default.createElement("element", null, _react.default.createElement("box", null, _react.default.createElement(Log, null), _react.default.createElement(Command, null), _react.default.createElement(Detail, null), _react.default.createElement(System, null), _react.default.createElement(State, null)));
      }
    }]);

    return Dashboard;
  }(_react.Component);
  /**
   * Log component.
   */


  var Log =
  /*#__PURE__*/
  function (_Component2) {
    _inherits(Log, _Component2);

    function Log() {
      _classCallCheck(this, Log);

      return _possibleConstructorReturn(this, _getPrototypeOf(Log).apply(this, arguments));
    }

    _createClass(Log, [{
      key: "render",
      value: function render() {
        return _react.default.createElement("box", {
          label: _chalk.default.bgHex(themeColor)(_chalk.default.black(" Log ")),
          class: stylesheet.bordered,
          width: "70%",
          height: "70%"
        }, "\n".concat(_chalk.default.hex(themeColor)(" Hello World")));
      }
    }]);

    return Log;
  }(_react.Component);
  /**
   * Command component.
   */


  var Command =
  /*#__PURE__*/
  function (_Component3) {
    _inherits(Command, _Component3);

    function Command() {
      _classCallCheck(this, Command);

      return _possibleConstructorReturn(this, _getPrototypeOf(Command).apply(this, arguments));
    }

    _createClass(Command, [{
      key: "render",
      value: function render() {
        return _react.default.createElement("box", {
          label: _chalk.default.bgHex(themeColor)(_chalk.default.black(" Command ")),
          class: stylesheet.bordered,
          top: "70%",
          width: "35%"
        }, "\n".concat(_chalk.default.hex(themeColor)(" /Commands")));
      }
    }]);

    return Command;
  }(_react.Component);
  /**
   * Detail component.
   */


  var Detail =
  /*#__PURE__*/
  function (_Component4) {
    _inherits(Detail, _Component4);

    function Detail() {
      _classCallCheck(this, Detail);

      return _possibleConstructorReturn(this, _getPrototypeOf(Detail).apply(this, arguments));
    }

    _createClass(Detail, [{
      key: "render",
      value: function render() {
        return _react.default.createElement("box", {
          label: _chalk.default.bgHex(themeColor)(_chalk.default.black(" Detail ")),
          class: stylesheet.bordered,
          top: "70%",
          left: "35%",
          width: "35%"
        });
      }
    }]);

    return Detail;
  }(_react.Component);
  /**
   * System component.
   */


  var System =
  /*#__PURE__*/
  function (_Component5) {
    _inherits(System, _Component5);

    function System() {
      _classCallCheck(this, System);

      return _possibleConstructorReturn(this, _getPrototypeOf(System).apply(this, arguments));
    }

    _createClass(System, [{
      key: "render",
      value: function render() {
        return _react.default.createElement("box", {
          label: _chalk.default.bgHex(themeColor)(_chalk.default.black(" System ")),
          class: stylesheet.bordered,
          left: "70%",
          width: "30%",
          height: "70%"
        });
      }
    }]);

    return System;
  }(_react.Component);
  /**
   * State component.
   */


  var State =
  /*#__PURE__*/
  function (_Component6) {
    _inherits(State, _Component6);

    function State() {
      _classCallCheck(this, State);

      return _possibleConstructorReturn(this, _getPrototypeOf(State).apply(this, arguments));
    }

    _createClass(State, [{
      key: "render",
      value: function render() {
        return _react.default.createElement("box", {
          label: _chalk.default.bgHex(themeColor)(_chalk.default.black(" State ")),
          class: stylesheet.bordered,
          top: "70%",
          left: "70%",
          width: "30%",
          height: "30%"
        }, "\n".concat(_chalk.default.hex(themeColor)(" All Good")));
      }
    }]);

    return State;
  }(_react.Component);

  var Form = function Form() {
    _classCallCheck(this, Form);

    /**
     * Rendering the screen.
     */
    var screen = _blessed.default.screen({
      autoPadding: true,
      smartCSR: true,
      title: 'react-blessed dashboard'
    });

    screen.key(['escape', 'q', 'C-c'], function (ch, key) {
      return process.exit(0);
    });
    (0, _reactBlessed.render)(_react.default.createElement(Dashboard, null), screen);
  };

  module.exports = Form;
});