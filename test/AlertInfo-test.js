import React from "react";
import TestUtils from "react-addons-test-utils";
import test from "tape";
import AlertInfo from "../src/AlertInfo";

const MESSAGE = "test message";
const shallowRenderer = TestUtils.createRenderer();

test("PanelMessages - AlertInfo - render", assert => {
	shallowRenderer.render(<AlertInfo message={MESSAGE}/>);
	const alert = shallowRenderer.getRenderOutput();
	const content = alert.props.children;

	assert.equal(alert.type, "div", "The main HMTL object is a div");
	assert.equal(alert.props.className, "alert alert-info alert-dismissible fade show", "The DIV css class");
	assert.equal(content.length, 2, "Two items inside");

	const message = content[0];
	const buttonClose = content[1];

	assert.equal(message, MESSAGE, "The alert panel text");
	assert.equal(buttonClose.type, "button", "The close button");
	assert.equal(buttonClose.props.className, "close", "The close button class");
	assert.equal(buttonClose.props["data-dismiss"], "alert", "The close button data-dismiss");
	assert.equal(buttonClose.props["aria-label"], "Close", "The close button aria-label");

	const spanCloseIcon = buttonClose.props.children;

	assert.equal(spanCloseIcon.type, "span");
	assert.end();
});
