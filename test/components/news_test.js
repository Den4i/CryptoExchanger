import { React, expect, shallow } from '../test_helper';

import { NewsList } from '../../src/components/News/News'
import news from '../../src/tmpDefines'

describe ('NewsList', () => {
    let component;

    beforeEach( () => {
        component = shallow(<NewsList />);
    });

    it ('renders NewsList', () => {
        expect(component).to.exist;
    });

});