import React from 'react';
const styles = {
    footer:{
      position:'fixed',
      bottom:'0',
      left: '0',
      right:'0',
      textAlign: 'center',
      
    },
    link:{
        maxWidth:'50px',
        maxHeight:'50px'
    }
  }

function Footer() {
    return (
      
      <footer className='border-top border-black p-4 border-3' style={styles.footer}>

        <a  href="https://www.linkedin.com"  rel="noreferrer"
          target="_blank">
          <img style={styles.link}
            src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
            alt="Linkedin Profile"  />
        </a>
        <a href="https://twitter.com"  rel="noreferrer" target="_blank">
          <img style={styles.link} src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg" alt=" Twitter Profile" />
        </a> 
        <a href="https://github.com"  rel="noreferrer" target="_blank">
          <img style={styles.link}
            src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
            alt="Github Profile"  />
        </a>
      
      </footer>
     
    );
  }
  
  export default Footer;
  


