import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import AddMovieModal from './AddMovieModal';
import { startAddMovie } from '../../context/movies/actions';
//---------WIP---------//

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
}));

jest.mock('../../context/movies/actions', () => ({
    startAddMovie: (newTitle) => jest.fn(() => Promise.resolve({ Title: newTitle })),
}));

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((init) => [init, setState]);

describe('AddMovieModal', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AddMovieModal startAddMovie={ startAddMovie } />);
        // wrapper = shallow(<AddMovieModal />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("Title input", () => {
        it("Should match the snapshot", () => {
            expect(wrapper).toMatchSnapshot();
        });

        it("Should change values in inputs properly", () => {
            wrapper.find('input#movie-title').simulate('change', {target: {value: 'New Title'}});
            const submitBtn = wrapper.find('Button').at(2);
            // console.log(wrapper.find('input#movie-title').html());
            // console.log(submitBtn.html());
            // let btnSpy = jest.spyOn(submitBtn, 'startAddMovie');
            submitBtn.simulate('click');
            expect(startAddMovie).toHaveBeenCalledTimes(1);
            // expect(submitBtn).toHaveBeenCalledWith(expect.any(Function), {
            //     Title: 'New Title',
            // });
        });
    });

});
