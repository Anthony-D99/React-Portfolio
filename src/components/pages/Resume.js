import React from 'react';
import {saveAs} from 'file-saver'
const image_url = 'https://images.resumgo.com/2019/08/DIONA-Free-Resume-Template.png'

const download= ()=>{
  saveAs(image_url, 'DIONA-Free-Resume-Template.png')
}

export default function Resume() {
  return (
    <div className>
      <h1 className='offset-5 '>Resume</h1>
      <img className='offset-1' onClick={download} src={image_url} alt='resume' />
        
      
    </div>
  );
}
