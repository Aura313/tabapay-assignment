import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
      }}
    >
      <p> {new Date().getFullYear()} Company Name</p>
      <p>
        Contact Us: &nbsp;
        <a
          href='mailto:contact@company.com'
          style={{ color: 'white', textDecoration: 'none' }}
        >
          contact@yourcompany.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
