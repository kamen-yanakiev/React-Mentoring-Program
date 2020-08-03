import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import AddMovieModal from './AddMovieModal';
import { startAddMovie } from '../../context/movies/actions';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
}));

jest.mock('../../context/movies/actions', () => ({
    startAddMovie: jest.fn(),
}));

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((init) => [init, setState]);

describe('AddMovieModal', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AddMovieModal />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("AddMovieModal", () => {
        it("Should match the snapshot", () => {
            expect(wrapper).toMatchSnapshot();
        });

        it("Should change values in inputs and submit the correct information when the Submit button is clicked", () => {
            wrapper.find('input#movie-title').simulate('change', { target: { value: 'New Title' } });
            wrapper.find('input#movie-release-date').simulate('change', { target: { value: 'New Release Date' } });
            wrapper.find('input#movie-url').simulate('change', { target: { value: 'New URL' } });
            wrapper.find('input#movie-genre').simulate('change', { target: { value: 'New Genre' } });
            wrapper.find('input#movie-overview').simulate('change', { target: { value: 'New Overview' } });
            wrapper.find('input#movie-runtime').simulate('change', { target: { value: 'New Runtime' } });

            const submitBtn = wrapper.find('Button#add-submit-btn');

            submitBtn.simulate('click');

            expect(startAddMovie).toHaveBeenCalledWith(expect.any(Function), expect.objectContaining({
                Plot: "New Overview",
                Poster: "New URL",
                Released: "New Release Date",
                Runtime: "New Runtime",
                Title: "New Title",
                Genre: "New Genre"
            }));
        });

        it("Should clear the values in the inputs when the Reset button is clicked", () => {
            wrapper.find('input#movie-title').simulate('change', { target: { value: 'New Title' } });
            wrapper.find('input#movie-release-date').simulate('change', { target: { value: 'New Release Date' } });
            wrapper.find('input#movie-url').simulate('change', { target: { value: 'New URL' } });
            wrapper.find('input#movie-genre').simulate('change', { target: { value: 'New Genre' } });
            wrapper.find('input#movie-overview').simulate('change', { target: { value: 'New Overview' } });
            wrapper.find('input#movie-runtime').simulate('change', { target: { value: 'New Runtime' } });

            const resetBtn = wrapper.find('Button#add-submit-btn');

            expect(wrapper.find('input#movie-title').props().value).toEqual('New Title');
            expect(wrapper.find('input#movie-release-date').props().value).toEqual('New Release Date');
            expect(wrapper.find('input#movie-url').props().value).toEqual('New URL');
            expect(wrapper.find('input#movie-genre').props().value).toEqual('New Genre');
            expect(wrapper.find('input#movie-overview').props().value).toEqual('New Overview');
            expect(wrapper.find('input#movie-runtime').props().value).toEqual('New Runtime');

            resetBtn.simulate('click');

            expect(wrapper.find('input#movie-title').props().value).toEqual('');
            expect(wrapper.find('input#movie-release-date').props().value).toEqual('');
            expect(wrapper.find('input#movie-url').props().value).toEqual('');
            expect(wrapper.find('input#movie-genre').props().value).toEqual('');
            expect(wrapper.find('input#movie-overview').props().value).toEqual('');
            expect(wrapper.find('input#movie-runtime').props().value).toEqual('');
        })

    });

});
