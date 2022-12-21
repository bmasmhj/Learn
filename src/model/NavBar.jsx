import { useEffect } from 'react';
function NavBar() {
    useEffect(() => {
        startnav();
      });
  return (
    <>
     <div id="navtop" className="position-sticky z-index-sticky container top-0">
            <div className="row">
                <div className="col-12">
                    <nav id="navbar" className="navbar navbar-expand-lg  blur  top-0 z-index-fixed shadow position-absolute py-2 start-0 end-0">
                            <div className="container d-flex justify-content-between">
                                <div>
                                    <h2 className="navbar-brand" href="#" rel="tooltip" title="Designed and Coded by Creative Tim"
                                        data-placement="bottom" target="_blank">
                                        L E A R N
                                    </h2>
                                </div>
                        
                                <div className="nav-item dropdown dropdown-hover mx-2">
                                    <div className="d-flex align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false"
                                        role="button">
                                        <a href="javascript:;" className="mx-3 avatar avatar-sm rounded-circle">
                                            <img alt="Image placeholder" src="https://bimash.com.np/assets/img/favicon.png" />
                                        </a>
                                        <h6 className="d-none d-md-block m-0">Bimash</h6>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                                        <div className="d-none d-lg-block">
                                            <ul className="list-group">
                                                <li className="nav-item list-group-item border-0 p-0">
                                                    <a className="dropdown-item py-2 ps-3 border-radius-md" href="">
                                                        <div className="d-flex">
                                                            <div className="icon h-10 me-3 d-flex mt-1"> </div>
                                                            <div>
                                                                <h6  className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                                    My Profile</h6>
                                                            </div>
                                                        </div>  
                                                    </a>
                                                </li>
                                                <li className="nav-item list-group-item border-0 p-0">
                                                    <a className="dropdown-item py-2 ps-3 border-radius-md" href="">
                                                        <div className="d-flex">
                                                            <div className="icon h-10 me-3 d-flex mt-1"> </div>
                                                            <div>
                                                                <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                                    Log Out</h6>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                        
                                    </div>
                                </div>
                            </div>
                        </nav>
                </div>
            </div>
        </div>
    </>
  );
}


function startnav(){
    var navtop = document.getElementById('navtop');
window.addEventListener('scroll', () => {
    var navbar = document.getElementById('navbar');
    var navtop = document.getElementById('navtop');
    const radius = window.scrollY / 4;

    var margin = Math.round(radius/2);
    if( margin < 0 ){
        margin = 0;
    }
    if(radius < 50){
        navbar.style.borderRadius = `${radius}px`;
        navbar.style.margin = `${margin}px`;
    }
    else{
        navbar.style.margin = `20px`;
        navbar.style.borderRadius = `50px`;
    }
    if(margin > 2 ){
        navtop.classList.add('container');
    }else{
        navtop.classList.remove('container');
    }
    

});
navtop.classList.remove('container');

}

export default NavBar;
