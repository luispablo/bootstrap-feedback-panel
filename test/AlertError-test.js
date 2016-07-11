import React from "react";
import TestUtils from "react-addons-test-utils";
import test from "tape";
import AlertError from "../src/AlertError";

const MESSAGE = "test message";
const shallowRenderer = TestUtils.createRenderer();

test("AlertError - renders", assert => {
	shallowRenderer.render(<AlertError message={MESSAGE}/>);
	const alert = shallowRenderer.getRenderOutput();
	const content = alert.props.children;

	assert.equal(alert.type, "div", "The main HMTL object is a div");
	assert.equal(alert.props.className, "alert alert-danger", "The DIV css class");
	assert.equal(content, MESSAGE, "The alert panel text");
	assert.end();
});
