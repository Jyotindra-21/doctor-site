
import React from 'react'

function Doctor() {
     // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1000);
  };

  React.useEffect(() => {
    spinner()
  },[])
    return (
        <div>
            {/* Spinner Start */}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            {/* Spinner End */}
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Doctors</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><a className="text-white" >Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" >Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Doctors</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
                        <h1>Our Experience Doctors</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="../src/website/assets/img/team-1.jpg" />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="../src/website/assets/img/team-2.jpg"  />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="../src/website/assets/img/team-3.jpg" />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="../src/website/assets/img/team-4.jpg"  />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="../src/website/assets/img/team-2.jpg"  />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="../src/website/assets/img/team-3.jpg"  />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="../src/website/assets/img/team-4.jpg"  />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="../src/website/assets/img/team-1.jpg"  />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
        </div>

    )
}

export default Doctor