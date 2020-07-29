import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../context/movies/reducers';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import AddMovieModal from './AddMovieModal';
//---------WIP---------//

const store = createStore(reducer);

Enzyme.configure({ adapter: new Adapter() });

describe('AddMovieModal', () => {
    // let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        // wrapper = Enzyme.mount(Enzyme.shallow(<Provider store={store}><AddMovieModal /></Provider>).get(0))
        // wrapper = shallow(<Provider store={store}><AddMovieModal /></Provider>)
    });

    describe("Title input", () => {
        it("Should capture title correctly onChange", () => {

            // const wrapper = mount(<Provider store={store}><AddMovieModal /></Provider>).get(0);
            const wrapper = mount(shallow(<Provider store={store}><AddMovieModal /></Provider>).get(0));
            // let input = wrapper.find('input');
            // const title = wrapper.find(AddMovieModal);
            expect(wrapper).toMatchSnapshot();
            // expect(wrapper.find('#movie-title').value).toBe('');
            // wrapper.find('#movie-title').simulate('change', { target: { name: 'input', value: '02' } })
            // title.instance().value = "Test";
            // title.simulate("change");
            // expect(setState).toHaveBeenCalledWith("Test");
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
        // wrapper = null;
    });
});
