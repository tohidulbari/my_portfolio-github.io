import React from "react";

function Service() {
    return (
            <section className="section bg-light" id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-1 pb-2">
                    <div className="titles">
                       <h2 className="title text-capitalize">What I Do?</h2>
                            </div>
                        </div>
                    </div>
                </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="feature-widget text-left rounded px-4">
              <div className="services-texts">
                <h3 className="title text-center mb-3 text-info"><i className="fas fa-code"></i> Web Development</h3>
                <div className="row">
                  <div className="col-6 px-0">
                    <table className="table table-sm text-light-muted">
                      <tbody>
                        <tr>
                          <td>Full-Stack Django <img src="/skills/python.png" width="15px" title="Python" alt="Python" /><img src="/skills/django.png" width="15px" title="Django" alt="Django" /></td>
                        </tr>
                        <tr>
                          <td>Laravel <img src="/skills/php.png" width="15px" title="PHP" alt="PHP" /> <img src="/skills/laravel.png" width="15px" title="Laravel" alt="Laravel" /> <img src="/skills/mysql.png" width="15px" title="MySQL" alt="MySQL" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-6 px-0">
                    <table className="table table-sm text-light-muted">
                      <tbody>
                        <tr>
                          <td>MERN Stack <img src="/skills/mongodb.png" width="15px" title="MongoDB" alt="MongoDB" /> <img src="/skills/express.png" width="15px" title="ExpressJS" alt="ExpressJS" /><img src="/skills/reactjs.png" width="15px" title="ReactJS" alt="ReactJS" /> <img src="/skills/nodejs.png" width="15px" title="NodeJS" alt="NodeJS" /></td>
                        </tr>
                        <tr>
                          <td>RESTful API <img src="/skills/nodejs.png" width="15px" title="NodeJS" alt="NodeJS" /> <img src="/skills/python.png" width="15px" title="Python" alt="Python" /> <img src="/skills/laravel.png" width="15px" title="Laravel" alt="Laravel" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div className="feature-widget text-left rounded">
            <div className="services-texts">
              <h3 className="title text-center mb-3 text-info"><i className="fas fa-robot"></i> Script &amp; Automation</h3>
              <div className="row">
                <div className="col-12 px-0">
                  <table className="table table-sm text-light-muted">
                    <tbody>
                      <tr>
                        <td>Web Scraping <img src="/skills/nodejs.png" width="20px" title="NodeJS" alt="NodeJS" /> <img src="/skills/puppeteer.png" width="20px" title="Puppeteer" alt="Puppeteer" /> <img src="/skills/python.png" width="20px" title="Python" alt="Python" /> <img src="/skills/beautifulsoup.png" width="20px" title="BeautifulSoup" alt="BeautifulSoup" /></td>
                      </tr>
                      <tr>
                        <td>Social Media Bots <img src="/skills/nodejs.png" width="20px" title="NodeJS" alt="NodeJS" /> <img src="/skills/python.png" width="20px" title="Python" alt="Python" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div className="feature-widget text-left rounded">
            <div className="services-texts">
              <h3 className="title text-center mb-3 text-info"><i className="fas fa-laptop-code"></i> Desktop Application</h3>
              <div className="row">
                <div className="col-12 px-0">
                  <table className="table table-sm text-light-muted">
                    <tbody>
                      <tr>
                        <td>ElectronJS <img src="/skills/nodejs.png" width="20px" title="NodeJS" alt="NodeJS" /> <img src="/skills/electron.png" width="20px" title="ElectronJS"alt="ElectronJS" /></td>
                      </tr>
                      <tr>
                        <td>Python GUI <img src="/skills/python.png" width="20px" title="Python" alt="Python" /> <img src="/skills/tkinter.png" width="20px" title="Tkinter" alt="Tkinter" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

            </div>
        </section>
    );
}

export default Service;