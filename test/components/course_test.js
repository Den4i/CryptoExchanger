import { React, expect, shallow } from '../test_helper';

import Course from '../../src/components/Course/Course';

describe('Course', () => {
    let component;
    let lastCurrency = '1';

    it('renders Course', () => {
        component = shallow(<Course lastCurrency={lastCurrency} />);
    });

    it('has one input element', () => {
        expect(component.find('input').length).to.equal(1);
    });

    it('input element have value equal props value', () => {
        expect(component.find('input')).to.have.value(lastCurrency)
    });

});