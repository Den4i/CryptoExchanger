import { React, expect, shallow } from '../test_helper';
import ExchangeRules from '../../src/components/ExchangeRules/ExchangeRules';


describe('ExchangeRules' , () => {
  let component;

  beforeEach(() => {
    component = shallow(<ExchangeRules />);
  });

  it('renders ExchangeRules', () => {
    expect(component).to.exist;
  });

  it('has 10 paragraphs', () => {
    expect(component.find('p').length).to.equal(10);
  });
});