import React from 'react';
import Notes from '../components/Notes'

const Home = (props) => {
  
  const {showAlert} = props;

  return <div>
    <div className="container my-3">
      
      <Notes showAlert={showAlert}/>

    </div>
  </div>
};

export default Home;
