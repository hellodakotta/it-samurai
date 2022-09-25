import React from "react";
import {create} from "react-test-renderer";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatusWithHooks status="test status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test status");
    });
    test("after creation span with status should contain correct status" +
        "tus from props should be in the state", () => {
        const component = create(<ProfileStatusWithHooks status="test status" />);
        const instance = component.getInstance();
        let span = component.findByType("span");
        expect(span.length).toBe(1);
    });

});