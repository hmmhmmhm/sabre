(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.sabre = mod.exports;
  }
})(this, function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var Console = require('./console');

  var Form = require('./form');

  var primaryForm = null;
  var primaryConsole = null;

  var Sabre =
  /*#__PURE__*/
  function () {
    function Sabre() {
      _classCallCheck(this, Sabre);
    }

    _createClass(Sabre, null, [{
      key: "init",
      value: function init() {
        if (primaryForm === null) primaryForm = new Form();
      }
    }, {
      key: "load",
      value: function load() {
        if (primaryConsole === null) {
          primaryConsole = new Console();
        } else {
          /**
           * @TODO
           * 이미 생성된 콘솔에 종속
           */
          var subConsole = new Console(); // TODO
        }
      }
    }]);

    return Sabre;
  }();

  module.exports = Sabre;
});