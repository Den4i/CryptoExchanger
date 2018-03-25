import { React, expect, shallow } from '../test_helper';
import Registration from '../../src/components/Registration/Registration';

describe('Registration' , () => {
  let component;

  beforeEach(() => {
    component = shallow(<Registration />);
  });

  it('renders Registration', () => {
    expect(component).to.exist;
  });

  it('has name input ', () => {
    expect(component.find('#name').length).to.equal(1);
  });

    it('has email input ', () => {
    expect(component.find('#email').length).to.equal(1);
  });
});