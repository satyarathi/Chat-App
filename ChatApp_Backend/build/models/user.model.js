"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  fullname: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  pic: {
    type: String,
    required: true,
    "default": "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  },
  isAdmin: {
    type: Boolean,
    "default": false,
    required: true
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('User', userSchema);
exports["default"] = _default;