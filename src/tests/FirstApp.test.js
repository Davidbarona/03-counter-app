import React from 'react'
import { render } from "@testing-library/react"
import FirstApp from "../FirstApp"


describe('testing on First App',()=>{
    test("should of show Hi,I'm Goku", () => {
        
        const greeting = "Hi,I'm Goku"
        const {getByText}= render(<FirstApp greeting={greeting}/>)

        expect(getByText(greeting)).toBeInTheDocument()
    })
    
})