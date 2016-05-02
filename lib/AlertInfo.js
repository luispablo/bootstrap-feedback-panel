const React = require("react"); // eslint-disable-line no-undef

const AlertInfo = (props) => {
	return React.createElement("div", { className: "alert alert-info", role: "alert" }, props.message);
};

AlertInfo.propTypes = {
	message: React.PropTypes.string
};

module.exports = AlertInfo; // eslint-disable-line no-undef
