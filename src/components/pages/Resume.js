import React from 'react';
// import { saveAs } from 'file-saver'
import image_url from '../../assets/images/DIONA-Free-Resume-Template.png'

// const download= ()=>{
//   saveAs(image_url, 'DIONA-Free-Resume-Template.png')
// }

export default function Resume() {
  return (
    <div className>
      <h1 className='offset-5 '>Resume</h1>
      <img className='offset-1' src={image_url} alt='resume' />
      <a href={image_url} download='DIONA-Free-Resume-Template.png'  >
        Download Resume
      </a>
    </div>
  );
}
