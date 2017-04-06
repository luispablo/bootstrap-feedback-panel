var React = require("react"); // eslint-disable-line no-undef
var AlertInfo = require("./AlertInfo"); // eslint-disable-line no-undef
var AlertError = require("./AlertError"); // eslint-disable-line no-undef

var TYPES = { "INFO": AlertInfo, "ERROR": AlertError };

var PanelMessages = function (props) {
	var items = props.messages.map(function (message, index) {
		var Component = TYPES[message.type];
		return React.createElement(Component, { key: index, message: message.text });
	});

	return React.createElement("span", {}, items);
};

module.exports = PanelMessages; // eslint-disable-line no-undef
