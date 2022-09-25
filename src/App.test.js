import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import MyApp from "./App";
import {act} from "react-dom/test-utils";
import ReactDOM from "react-dom/client";
// @ts-ignore
global.IS_REACT_ACT_ENVIRONMENT = true
// @ts-ignore
self.IS_REACT_ACT_ENVIRONMENT = true
// @ts-ignore
window.IS_REACT_ACT_ENVIRONMENT = true


let container = null;
let root = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    act(() => {
        container = document.createElement("div");
        root = ReactDOM.createRoot(container);
    });
});

afterEach(() => {
    // подчищаем после завершения
    act(() => {
        root.unmount();
        container.remove();
        container = null;
    });

});


test('renders without crashing', () => {
    act(() => {
        root.render(
            <MyApp/>
        );
    });
});
