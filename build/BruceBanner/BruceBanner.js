'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BruceBanner = _react2.default.createElement(
    'div',
    { className: 'bruce-banner' },
    _react2.default.createElement(
        'div',
        { className: 'bruce-header-container' },
        _react2.default.createElement(
            'h1',
            { className: 'bruce-header' },
            'Photoshop Battleground'
        )
    )
);

exports.default = BruceBanner;