import React from 'react'
import MyDropzone from './component/Dropzone'
import Footer from './component/Footer';
import Header from './component/Header';

/**
* @author
* @function 
**/

const App  = (props) => {
  return(
    <div>
      <Header />
      <MyDropzone /> 
      <Footer />
    </div>
   )

 }

export default App;