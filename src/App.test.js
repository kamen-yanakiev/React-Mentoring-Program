import React from "react";
import { mount } from "enzyme";
import App from "./App";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("App", () => {
  test("Verify that it is created", () => {
    const component = mount(<App />);
    expect(component.find(App)).toHaveLength(1);
  });

  test("App to have an enclosing div with className app-container", () => {
    const component = mount(<App />);
    const text = component.find('.app-container').text();
    expect(text).toBe('Renders');
  });
});
