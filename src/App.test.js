import React from "react";
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import reducer from './context/movies/reducers';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import App from "./App";

configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const store = createStore(reducer);
    const tree = renderer
        .create(<Provider store={store}>
            <App />
        </Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

describe("App", () => {
    const store = createStore(reducer);
    test("Verify that it is created", () => {
        const component = mount(
            <Provider store={store}>
                <App />
            </Provider>);
        expect(component.find(App)).toHaveLength(1);
    });

    // test("App to have an enclosing div with className app-container", () => {
    //     const component = mount(<App />);
    //     const text = component.find('.app-container').text();
    //     expect(text).toBe('Renders');
    // });
});