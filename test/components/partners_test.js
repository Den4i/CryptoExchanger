import { React, expect, shallow } from '../test_helper';
import Partners from '../../src/components/Partners/Partners';

describe('Partners' , () => {
  let component;

  beforeEach(() => {
    component = shallow(<Partners />);
  });

  it('renders Partners', () => {
    expect(component).to.exist;
  });

  it('has 3 headers of size 5 ', () => {
    expect(component.find('h5').length).to.equal(3);
  });
});