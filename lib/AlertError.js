const React = require("react"); // eslint-disable-line no-undef

const AlertError = (props) => {
	return React.createElement("div", { className: "alert alert-danger", role: "alert" }, props.message);
};

AlertError.propTypes = {
	message: React.PropTypes.string
};

module.exports = AlertError; // eslint-disable-line no-undef
