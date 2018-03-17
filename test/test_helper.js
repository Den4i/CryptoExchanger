import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, configure } from 'enzyme';

chai.use(chaiEnzyme());

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export {React, expect, shallow};
