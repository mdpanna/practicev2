import React from 'react';
function Footer() {
  return (
    <>
    
    <section className="footer-navbar-part">
        <div className="container">
            <div className="box">

                <ul>
                    <li><a href="#"><i className="fa-solid fa-house"></i></a></li>
                    <li><a href="#" className="center-btn" data-bs-toggle="offcanvas" data-bs-target="#post_add_bottom_modal" aria-controls="post_add_bottom_modal"><i className="fa-solid fa-plus"></i></a></li>
                    <li><a href="#"><i className="fa-solid fa-user"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
    

    </>
  )
}

export default Footer;