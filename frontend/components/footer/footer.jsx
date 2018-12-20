import React from 'react';

class Footer extends React.Component {
  render(){
    return (
      <div>
        <div className='footer-container'>
          <div className='grid-container'>
            <div className='grid-row'>
              <div className='col-full'>
                <section className='grid-section'>
                  <h3 className='grid-title'>ABOUT</h3>
                  <ul className='grid-ul'>
                    <li className='link-soft-black'>
                      <a>About us</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Our charter</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Stats</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Press</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Jobs</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='col-full'>
                <section className='grid-section'>
                  <h3 className='grid-title'>SUPPORT</h3>
                  <ul className='grid-ul'>
                    <li className='link-soft-black'>
                      <a>Help Center</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Our Rules</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Creator Handbook</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Campus</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Patrons</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='col-full'>
                <section className='grid-section'>
                  <h3 className='grid-title'>HELLO</h3>
                  <ul className='grid-ul'>
                    <li className='link-soft-black'>
                      <a>WeAreStarters Blog</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Engineering Blog</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Newsletters</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>Research</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='col-full'>
                <section className='grid-section'>
                  <h3 className='grid-title'>MORE FROM KICKSTARTER</h3>
                  <ul className='grid-ul'>
                    <li className='link-soft-black'>
                      <a>WeAreStarters Live</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>The Creative Independent</a>
                    </li>
                    <li className='link-soft-black'>
                      <a>WeAreStarters Magazine</a>
                    </li>
                  </ul>
                </section>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
