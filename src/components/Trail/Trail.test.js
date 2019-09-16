import React from 'react';
import { shallow } from 'enzyme';
import Trail from '../Trail/Trail';

describe('Trail', () => {

  let wrapper, mockTrail;
  beforeEach(() => {
    mockTrail = {
      imgSmall: "image url",
      name: "Mock trail name",
      length: 3,
      ascent: 200,
      descent: 100,
      summary: "Summary"
    }
    wrapper = shallow(<Trail 
    trail={mockTrail}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
}) 