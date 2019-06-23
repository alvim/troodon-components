"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var stock = {
  Paragraph: function Paragraph(_ref) {
    var children = _ref.children;
    return React.createElement("p", null, children);
  },
  Divider: function Divider() {
    return React.createElement("hr", null);
  },
  Span: function Span() {
    return React.createElement("span", null);
  },
  Banner: function Banner(_ref2) {
    var children = _ref2.children;
    return React.createElement("div", null, children);
  }
};
var _default = stock;
exports["default"] = _default;