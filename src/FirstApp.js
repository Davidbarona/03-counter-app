import React from "react";
import PropTypes from 'prop-types';

const FirstApp = ({ greeting,subtitle}) => {
  // const greeting = 'hello Bro'
  // const object = {
  //     name:'dave',
  //     age:29
  // }
//   console.log(props);

    if(!greeting){
        throw new Error ('you need put the greeting')
    }

  return (
    <>
      <h1>{greeting}</h1>
      {/* <pre>{JSON.stringify(object,null,3)}</pre> */}
   
      <p>{subtitle}</p>
    </>
  );


};

FirstApp.propTypes={
    greeting:PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle:"I'm subtitle"
}

export default FirstApp;
