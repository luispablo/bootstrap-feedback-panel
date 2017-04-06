var React = require("react"); // eslint-disable-line no-undef

var AlertInfo = function (props) {
	return React.createElement("div", { className: "alert alert-info", role: "alert" }, props.message);
};

module.exports = AlertInfo; // eslint-disable-line no-undef
