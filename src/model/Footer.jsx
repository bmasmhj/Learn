function Footer(){
    return(
        <>
          <footer class="footer py-5  position-relative overflow-hidden">
                <span className="mask blur bg-gradient-dark"></span>
            <div class="container position-relative">
              <div class="row">
                <div class="col-lg-4 me-auto my-auto text-lg-start text-center">
                  <h6 class="text-white font-weight-bolder text-uppercase mb-2">Soft</h6>
                  <p class="text-white">
                    Copyright © 2022 L E A R N by BCA Teams.
                  </p>
                </div>
              <div className="col-lg-6">
                  <h6 className="text-white">Subscribe</h6>
                  <p class="text-white text-sm">Get access to subscriber exclusive deals and be the first who gets informed about fresh sales.</p>
                  <div class="d-flex flex-row justify-content-between ">
                      <div class="w-90 m-0  form-group">
                        <div class="input-group m-0  input-group-alternative">
                          <input class="form-control bg-transparent" placeholder="Enter your Email" type="text"/>
                        </div>
                      </div>
                      <button type="button" class="mx-2 m-0 btn bg-gradient-info">Subscribe</button>
                  </div>
                </div>
              </div>
              </div>
          </footer>
        </>
    )
}

export default Footer;