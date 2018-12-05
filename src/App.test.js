import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it.skip('matches snapshot', () => {
    const snapshot = renderer.create(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('should render the H1 with the proper display class', () => {
    const wrapper = shallow(<App />);

    const display = wrapper.find('h1.display');
    expect(display.length).toBe(1);
    expect(wrapper.find('h1.display').length).toBe(1);
  });

  it('should be off by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.isOn).toBe(false);
  });

  it('determines if the h1 is displaying properly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    let display = wrapper.find('h1.display');

    instance.toggle();
    display = wrapper.find('h1.display');
    expect(display.text()).toBe('On');
  });

  describe('the toggle button', () => {
    it('should toggle state on click', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      const button = wrapper.find('.toggle-btn');

      expect(instance.state.isOn).toBe(false);
      button.simulate('click');
      expect(instance.state.isOn).toBe(true);
      button.simulate('click');
      expect(instance.state.isOn).toBe(false);
    });
  });
});
