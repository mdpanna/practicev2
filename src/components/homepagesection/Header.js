import React from 'react';

function HeaderSection(){
    return(
        <>
<header className="header-part">

    <div className="container">
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MyApps</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebaroffcanvas" aria-controls="sidebaroffcanvas">
                    <i className="fa-solid fa-bars"></i>
                </button>


                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-lg-flex">


                    <li className="nav-item">
                        <a className="nav-link" href="#">Message</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#notificationModalLabel">Notification</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#settingsModal">Setting</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Logout</a>
                    </li>
                </ul>

                <a className="btn search-btn" data-bs-toggle="modal" data-bs-target="#product_search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>

            </div>
        </nav>
    </div>

</header>

<div className="offcanvas offcanvas-start sidebaroffcanvas-box" tabindex="-1" id="sidebaroffcanvas" aria-labelledby="sidebaroffcanvasExampleLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Username</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
        <a className="nav-link" href="#">Message</a>
        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#notificationModalLabel">Notification</a>
        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#settingsModal">Setting</a>
        <a className="nav-link" href="#">Logout</a>
    </div>
</div>

</>
    )
}

export default HeaderSection;