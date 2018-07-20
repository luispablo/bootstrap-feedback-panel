var React = require("react"); // eslint-disable-line no-undef

var AlertInfo = function (props) {
	var alertClass = "alert alert-info alert-dismissible fade show";
	var closeButtonProps = { type: "button", className: "close", "data-dismiss": "alert", "aria-label": "Close" };

	var spanTimes = React.createElement("span", { "aria-hidden": "true", dangerouslySetInnerHTML: { __html: '&times;' } });
	var buttonClose = React.createElement("button", closeButtonProps, spanTimes);

	return React.createElement("div", { className: alertClass, role: "alert" }, [props.message, buttonClose]);
};

module.exports = AlertInfo; // eslint-disable-line no-undef
