"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPossiblePhoneNumber;

var _parsePhoneNumber = require("./parsePhoneNumber.js");

var _parsePhoneNumberFromString_ = _interopRequireDefault(require("./parsePhoneNumberFromString_.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isPossiblePhoneNumber() {
  var _normalizeArguments = (0, _parsePhoneNumber.normalizeArguments)(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  options = _objectSpread(_objectSpread({}, options), {}, {
    extract: false
  });
  var phoneNumber = (0, _parsePhoneNumberFromString_["default"])(text, options, metadata);
  return phoneNumber && phoneNumber.isPossible() || false;
}
//# sourceMappingURL=isPossiblePhoneNumber.js.map