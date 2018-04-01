import { React, expect, shallow } from '../test_helper';

import Contacts from '../../src/components/Contacts/Contacts';

describe ('Contacts', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Contacts />);
    });

    it ('renders Contacts', () => {
        expect(component).to.exist;
    });

    it('has contactsInfo div ', () => {
        expect(component.find('.contactsInfo').length).to.equal(1);
    });

    it('has 2 columns ', () => {
        expect(component.find('.contactsInfo_columns').length).to.equal(2);
    });
});