import React from "react";
import TestUtils from "react-addons-test-utils";
import test from "tape";
import PanelMessages from "../index";
import AlertInfo from "../lib/AlertInfo";
import AlertError from "../lib/AlertError";

const MESSAGE = "test message";
const shallowRenderer = TestUtils.createRenderer();

test("PanelMessages - renders", assert => {
	const messages = [{type: "INFO", text: MESSAGE}, {type: "ERROR", text: MESSAGE}];
	shallowRenderer.render(<PanelMessages messages={messages}/>);
	const panel = shallowRenderer.getRenderOutput();

	assert.equal(panel.props.children[0].type, AlertInfo, "First and info alert");
	assert.equal(panel.props.children[1].type, AlertError, "Second element is an error alert");
	assert.end();
});
