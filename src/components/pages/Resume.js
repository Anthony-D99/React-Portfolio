import React from 'react';
import image_url from '../../assets/images/DIONA-Free-Resume-Template.png'

const styles = {
  
  resume:{
      
      maxHeight:'500px'
  }
}


export default function Resume() {
  return (
    <div className>
      <h1 className='offset-5 '>Resume</h1>
      <img style={styles.resume} className='offset-1' src={image_url} alt='resume' />
      <a className='m-2' href={image_url} download='DIONA-Free-Resume-Template.png'  >
      ⬅Download Resume
      </a>
    </div>
  );
}
