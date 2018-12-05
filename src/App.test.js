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
  });
});
