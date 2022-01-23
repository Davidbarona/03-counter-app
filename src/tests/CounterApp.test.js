import React from 'react'
import { render } from "@testing-library/react"
import CounterApp from '../CounterApp'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'

describe('testing on counterApp Component',()=>{


  let  wrapper = shallow(<CounterApp />)
  beforeEach(()=>{
     wrapper = shallow(<CounterApp />)
  })

    test('should render CounterApp component', () => {
      
      expect(wrapper).toMatchSnapshot();
    });

    test('should render the value by default of  100 ', () => {
       
        const wrapper = shallow(<CounterApp value={100}/>)
        const numberDefault = wrapper.find('p').text().trim()

        expect(numberDefault).toBe("100")
    });
    
    



    test('should increment with the button +1', () => {

      wrapper.find('button').at(0).simulate('click')
      const numberDefault = wrapper.find('p').text().trim()

      expect(numberDefault).toBe('11')
      

    });


   

    test('should decrement with the button -1', () => {

      wrapper.find('button').at(2).simulate('click')
      const numberDefault = wrapper.find('p').text().trim()

      expect(numberDefault).toBe('9')
      

    });

    test('should put the default value  with the button reset', () => {

      const wrapper = shallow(<CounterApp value={105}/>)
      wrapper.find('button').at(0).simulate('click')
      wrapper.find('button').at(0).simulate('click')
      wrapper.find('button').at(1).simulate('click')
      const numberDefault = wrapper.find('p').text().trim()
      expect(numberDefault).toBe('105')

    });
    
})