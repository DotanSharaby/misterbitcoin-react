import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TransferList } from './TransferList';

Enzyme.configure({ adapter: new Adapter() })

describe('TransferList functionality', () => {
    it('should be true', () => {
        const foo = true;
        expect(foo).toBe(true)
    })
    it('should render - no previous transfers', () => {
        const wrapper = shallow(<TransferList transfers={[]} />)
        const text = wrapper.find('h4')
        console.log(text.text())
    })
    it('should render - transfers recieved in props', () => {
        const wrapper = shallow(<TransferList transfers={[{ to: 'shoshi' }, { to: 'popo' }]} />)
        const text = wrapper.find('ul')
        console.log(text.text())
    })
})