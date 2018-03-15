import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/App/App';


describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('render Application', () => {
    expect(component).to.exist;
  });
});
