"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stock = {
  Paragraph: function Paragraph(_ref) {
    var children = _ref.children;
    return _react["default"].createElement("p", null, children);
  },
  Divider: function Divider() {
    return _react["default"].createElement("hr", null);
  },
  Span: function Span() {
    return _react["default"].createElement("span", null);
  },
  Banner: function Banner(_ref2) {
    var children = _ref2.children;
    return _react["default"].createElement("div", null, children);
  }
};
var _default = stock;
exports["default"] = _default;