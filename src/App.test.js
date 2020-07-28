import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import reducer from './context/movies/reducers';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import App from "./App";

configure({ adapter: new Adapter() });
const store = createStore(reducer);
it('renders correctly', () => {
    const tree = renderer
        .create(<Provider store={store}>
            <App />
        </Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

describe("App", () => {
    test("Verify that it is created", () => {
        const component = mount(
            <Provider store={store}>
                <App />
            </Provider>);
        expect(component.find(App)).toHaveLength(1);
    });
});