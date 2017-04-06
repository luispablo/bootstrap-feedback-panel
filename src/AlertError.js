var React = require("react"); // eslint-disable-line no-undef

var AlertError = function (props) {
	return React.createElement("div", { className: "alert alert-danger", role: "alert" }, props.message);
};

module.exports = AlertError; // eslint-disable-line no-undef
