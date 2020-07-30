import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../context/movies/reducers';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import AddMovieModal from './AddMovieModal';
//---------WIP---------//

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}))

// const dispatch = useDispatch();

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
            const wrapper = shallow(<AddMovieModal />).get(0);
            // const wrapper = shallow(<AddMovieModal />);
            // let input = shallow(wrapper.find('movie-title'));
            // let input = wrapper.dive().find('#movie-title');
            // const title = wrapper.find(AddMovieModal);
            expect(wrapper).toMatchSnapshot();

            console.log(wrapper);
            // expect(wrapper.find('movie-title').value).toBe('');
            // wrapper.find('movie-title').simulate('change', { target: { name: 'movie-title', value: '02' } });
            // expect(wrapper.find('movie-title').value).toBe('02');

            // input.instance().value = "Test";
            // input.simulate("change");
            // expect(setState).toHaveBeenCalledWith("Test");
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
        // wrapper = null;
    });
});
