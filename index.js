const React = require("react"); // eslint-disable-line no-undef
const AlertInfo = require("./lib/AlertInfo"); // eslint-disable-line no-undef
const AlertError = require("./lib/AlertError"); // eslint-disable-line no-undef

const TYPES = { "INFO": AlertInfo, "ERROR": AlertError };

const PanelMessages = (props) => {
	const items = props.messages.map((message, index) => {
		const Component = TYPES[message.type];
		return React.createElement(Component, { key: index, message: message.text });
	});

	return React.createElement("span", {}, items);
};

PanelMessages.propTypes = {
	messages: React.PropTypes.array
};

module.exports = PanelMessages; // eslint-disable-line no-undef
