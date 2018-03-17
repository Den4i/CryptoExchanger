import { React, expect, shallow } from '../test_helper';
import { App, LeftInput, ResultInput, PoloniexTicket, Course } from '../../src/components/App/App';


describe('App' , () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders Application', () => {
    expect(component).to.exist;
  });

  it('has a LeftInput', () => {
    expect(component.find(LeftInput)).to.have.length(1);
  });

  it('has ResultInput', () => {
    expect(component.find(ResultInput)).to.have.length(1);
  });

  it('has two PoloniexTicket', () => {
    expect(component.find(PoloniexTicket)).to.have.length(2);
  });

   it('has Course', () => {
    expect(component.find(Course)).to.have.length(1);
  });

});
