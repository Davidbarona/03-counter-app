import React from 'react'
import { render } from "@testing-library/react"
import FirstApp from "../FirstApp"
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'

describe('testing on First App',()=>{
    
    // Don't will function because tobeInthe document is from @testing-library/jest-dom/extend-expect and not it's turn on
    // test("should of show Hi,I'm Goku", () => {
        
    //     const greeting = "Hi,I'm Goku"
    //     const {getByText}= render(<FirstApp greeting={greeting}/>)

    //     expect(getByText(greeting)).toBeInTheDocument()
    // })

    test('should render <FirstApp /> correctly', () => {
        
        const greeting = "Hi,I'm Goku"
        const wrapper = shallow(<FirstApp greeting={greeting}/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('should render the subtitle send by props', () => {
        const greeting = "Hi,I'm Goku"
        const subtitle = "Hi,I'm a subtitle"
        const wrapper = shallow(
        <FirstApp
             greeting={greeting}
             subtitle={subtitle}
             />)

        const paragraphText = wrapper.find('p').text()
        
        expect(paragraphText).toBe(subtitle)
        
    });
    
    
    
})