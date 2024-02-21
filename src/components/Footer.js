import React from "react";
import "../styled-components/Footer.css";

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='container footer-container py-5'>
        <div className='row footer-info'>
          <div className='col contact d-flex'>
            {/* <a
                href='https://drive.google.com/open?export=download&id=1rYE75B9b-efX3OS4cuT7FXttdOoG_ToTAD3njavx-1E'
                target='_blank'
                rel='noopener noreferrer'
                download='MonikaResume.pdf'
              >
                Click here to download the PDF
              </a> */}
            <div className='social-media-box mx-3'>
              <a
                href='https://mail.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Gmail'
              >
                <i className='fas fa-envelope fa-3x'></i>
              </a>
            </div>
            <div className='social-media-box mx-3'>
              <a
                href='https://www.linkedin.com/in/monika12b/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin fa-3x'></i>
              </a>
            </div>
            <div className='social-media-box mx-3'>
              <a
                href='https://www.github.com/Monika-ch/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github'
              >
                <i className='fab fa-github fa-3x'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='row copyRightInfo'>
          {/* <div className='col py-5 p-md-5'>
              »»———-　 ℘rompt share by ൩onika Ⓒ 2o24 　———-««
            </div> */}
          <div className='col py-5 p-md-5'>
            ̶̶̶̶  «̶ ̶̶̶ ̶ «̶ ̶̶̶ 　　 ℘rompt 𝓢hare by{" "}
            <a
              href='https://www.linkedin.com/in/monika12b/'
              className='profileLink'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Navigation to LinkedIn Profile'
            >
              ൩onika
            </a>{" "}
            Ⓒ 2o24 　　 ̶ ̶ ̶»̶ ̶̶̶ ̶ »̶ ̶̶̶  
          </div>
        </div>
      </div>
    </div>
  );
}
