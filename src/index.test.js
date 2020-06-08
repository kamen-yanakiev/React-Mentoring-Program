import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import App from 'index.html';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component testing', function() {

  it('App renders main message', () => {
    const wrapper = shallow(<App />);
    const text = <div>Index</div>;
    expect(wrapper).to.contain(text);
});

  chai.use(chaiEnzyme())

})