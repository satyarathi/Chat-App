"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegister = exports.userLogin = exports.getAllUsers = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var bcrypt = require('bcrypt');
//get all users
var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _user["default"].find();
        case 2:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllUsers() {
    return _ref.apply(this, arguments);
  };
}();

///Register new user
exports.getAllUsers = getAllUsers;
var userRegister = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var existingUser, salt, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _user["default"].findOne({
            email: body.email
          });
        case 2:
          existingUser = _context2.sent;
          if (existingUser) {
            _context2.next = 16;
            break;
          }
          _context2.next = 6;
          return bcrypt.genSalt(10);
        case 6:
          salt = _context2.sent;
          _context2.next = 9;
          return bcrypt.hash(body.password, salt);
        case 9:
          body.password = _context2.sent;
          _context2.next = 12;
          return _user["default"].create(body);
        case 12:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 16:
          throw new Error('User Already Exist..');
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function userRegister(_x) {
    return _ref2.apply(this, arguments);
  };
}();

//Login User
exports.userRegister = userRegister;
var userLogin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var userData, validPassword, token;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _user["default"].findOne({
            email: body.email
          });
        case 3:
          userData = _context3.sent;
          if (userData) {
            _context3.next = 6;
            break;
          }
          throw new Error("Invalid Email");
        case 6:
          _context3.next = 8;
          return bcrypt.compare(body.password, userData.password);
        case 8:
          validPassword = _context3.sent;
          if (validPassword) {
            _context3.next = 11;
            break;
          }
          throw new Error("Invalid Password");
        case 11:
          token = _jsonwebtoken["default"].sign({
            email: userData.email,
            id: userData._id
          }, process.env.JWT_SECRET_KEY);
          return _context3.abrupt("return", token);
        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](0);
          throw new Error(_context3.t0);
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 15]]);
  }));
  return function userLogin(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
exports.userLogin = userLogin;