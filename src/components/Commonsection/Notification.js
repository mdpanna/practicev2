import React from 'react'

function Notification() {
  return (
    <>
    

    {/* <!-- Notification --> */}
    <div className="modal fade notification-modal" id="notificationModalLabel" tabindex="-1" aria-labelledby="notificationModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">

                <div className="modal-body">


                    <section className="section-50">
                        <div className="container">
                           <div className=" d-flex align-items-center ">
                             <h3 className="m-b-50 heading-line w-100">Notifications <i className="fa fa-bell text-muted"></i></h3>
                            <button type="button" className="btn-close position-absolute top-0 end-0 p-3" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="notification-ui_dd-content">
                                <div className="notification-list notification-list--unread">
                                    <div className="notification-list_content">
                                        <div className="notification-list_img">
                                            <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user"/>
                                        </div>
                                        <div className="notification-list_detail">
                                            <p><b>John Doe</b> reacted to your post</p>
                                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                                            <p className="text-muted"><small>10 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="notification-list_feature-img">
                                        <img src="https://i.imgur.com/AbZqFnR.jpg" alt="Feature image"/>
                                    </div>
                                </div>
                              
                                <div className="notification-list">
                                    <div className="notification-list_content">
                                        <div className="notification-list_img">
                                            <img src="https://i.imgur.com/ltXdE4K.jpg" alt="user"/>
                                        </div>
                                        <div className="notification-list_detail">
                                            <p><b>Brian Cumin</b> reacted to your post</p>
                                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                                            <p className="text-muted"><small>10 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="notification-list_feature-img">
                                        <img src="https://i.imgur.com/bpBpAlH.jpg" alt="Feature image"/>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Notification;