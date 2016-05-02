import React from "react";
import TestUtils from "react-addons-test-utils";
import test from "tape";
import AlertInfo from "../lib/AlertInfo";

const MESSAGE = "test message";
const shallowRenderer = TestUtils.createRenderer();

test("PanelMessages - AlertInfo - render", assert => {
	shallowRenderer.render(<AlertInfo message={MESSAGE}/>);
	const alert = shallowRenderer.getRenderOutput();
	const content = alert.props.children;

	assert.equal(alert.type, "div", "The main HMTL object is a div");
	assert.equal(alert.props.className, "alert alert-info", "The DIV css class");
	assert.equal(content, MESSAGE, "The alert panel text");
	assert.end();
});
