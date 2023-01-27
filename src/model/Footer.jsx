function Footer(){
    return(
        <>
          <footer className="footer py-5  position-relative overflow-hidden">
                <span className="mask blur bg-gradient-dark"></span>
            <div className="container position-relative">
              <div className="row">
                <div className="col-lg-4 me-auto my-auto text-lg-start text-center">
                  <h6 className="text-white font-weight-bolder text-uppercase mb-2">L E A R N</h6>
                  <p className="text-white">
                    Copyright © 2023
                  </p>
                </div>
              <div className="col-lg-6">
                  <h6 className="text-white">Subscribe</h6>
                  <p className="text-white text-sm">Get notified when we upload some new and fresh contents</p>
                  <div className="d-flex flex-row justify-content-between ">
                      <div className="w-90 m-0  form-group">
                        <div className="input-group m-0  input-group-alternative">
                          <input className="form-control bg-transparent" placeholder="Enter your Email" type="text"/>
                        </div>
                      </div>
                      <button type="button" className="mx-2 m-0 btn bg-gradient-info">Subscribe</button>
                  </div>
                </div>
              </div>
              </div>
          </footer>
        </>
    )
}

export default Footer;