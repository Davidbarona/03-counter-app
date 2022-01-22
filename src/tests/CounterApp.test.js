import React from 'react'
import { render } from "@testing-library/react"
import CounterApp from '../CounterApp'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'

describe('testing on counterApp Component',()=>{

    test('should render CounterApp component', () => {
      const wrapper = shallow(<CounterApp />)
      expect(wrapper).toMatchSnapshot();
    });

    test('should render the value by default of  100 ', () => {
       
        const wrapper = shallow(<CounterApp value={100}/>)
        const numberDefault = wrapper.find('p').text().trim()

        expect(numberDefault).toBe("100")
    });
    


})