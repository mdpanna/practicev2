import React from 'react'

function Setting() {
  return (
    <>
    

    {/* <!-- Settings --> */}
    <div className="modal fade settings-modal" id="settingsModal" tabindex="-1" aria-labelledby="settingsModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">

                <div className="modal-body">
                    <div className="row">

                        <div className="col-12">

                            <ul id="myTab" role="tablist">
                                <li>
                                    <a href="#" className=" active" id="User-info-tab" data-bs-toggle="tab" data-bs-target="#User-info-tab-pane" type="button" role="tab" aria-controls="User-info-tab-pane" aria-selected="true">Info</a>
                                </li>
                                <li>
                                    <a href="#" id="Password-Update-tab" data-bs-toggle="tab" data-bs-target="#Password-Update-tab-pane" type="button" role="tab" aria-controls="Password-Update-tab-pane" aria-selected="false">Password </a>
                                </li>
                                <li>
                                    <a href="#" id="Email-Update-tab" data-bs-toggle="tab" data-bs-target="#Email-Update-tab-pane" type="button" role="tab" aria-controls="Email-Update-tab-pane" aria-selected="false">Email </a>
                                </li>
                                <li>
                                    <a href="#" id="Number-Update-tab" data-bs-toggle="tab" data-bs-target="#Number-Update-tab-pane" type="button" role="tab" aria-controls="Number-Update-tab-pane" aria-selected="false">Number </a>
                                </li>

                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="User-info-tab-pane" role="tabpanel" aria-labelledby="User-info-tab" tabindex="0">
                                    <div className="p-3 " id="update_info_box">
                                        <h3 className="title mb-4 text-center">Update Info</h3>

                                        <form action="" method="post" className="row g-3 needs-validation" novalidate id="user_info_update">
                                            <div className="col-sm-12">
                                                <div className="form-floating">
                                                    <input type="text" name="name" className="form-control" id="inputname" placeholder="Name" required value=""/>
                                                    <label for="inputname">Update your Name</label>

                                                </div>

                                            </div>

                                            <div className="col-sm-12">
                                                <div className="form-floating">
                                                    <select className="form-select countries" name="country" id="floatingInput_Country" onchange="set_city_state(this,city_state)" aria-label="Floating label select example" required>

                                                        <option selected disabled value="">Open this select menu</option>

                                                    </select>

                                                    <label for="floatingInput_Country">Update Country</label>

                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-floating">
                                                    <select className="form-select" name="city_state" id="inputcity" onchange="print_city_state(country,this)" aria-label="Floating label select example" required>
                                                        <option selected disabled value="">Open this select menu</option>

                                                    </select>



                                                    <label for="floatingInput_city">Update City</label>

                                                </div>
                                            </div>


                                            <div className="col-sm-12">
                                                <div className="form-floating">
                                                    <input type="text" name="address" className="form-control" id="inputaddress" placeholder="Address" required/>
                                                    <label for="inputaddress">Update address</label>

                                                </div>

                                            </div>

                                            <div className="col-12">
                                                <input type="hidden" name="action" value="user_info_update"/>
                                                <input type="hidden" name="type_account" className="type_account"/>
                                                <input type="hidden" name="username" className="username"/>
                                                <button className="btn btn-custom w-100" type="submit">Update</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Password-Update-tab-pane" role="tabpanel" aria-labelledby="Password-Update-tab" tabindex="0">
                                    <div className="step-box password-update-box p-3">

                                        <div className="password_update_step1">
                                            <h3 className="title mb-4 text-center">Update Password</h3>

                                            <form className="row g-3 needs-validation" novalidate action="" method="post" id="password_update_step1">
                                                <div className="col-sm-12">
                                                    <div className="form-floating">
                                                        <input type="password" className="form-control" id="inputoldPassword" name="inputoldPassword" placeholder="Old Password" required/>
                                                        <label for="inputoldPassword">Enter your old password</label>

                                                    </div>

                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-floating">
                                                        <input type="password" className="form-control" id="inputupdate_newPassword" name="inputnewPassword" placeholder="New Password" required/>
                                                        <label for="inputupdate_newPassword">Enter new password</label>

                                                    </div>

                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="form-floating">
                                                        <input type="password" className="form-control" id="inputConfirmPassword" name="inputConfirmPassword" placeholder="Confirm Password" required/>
                                                        <label for="inputConfirmPassword">Confirm password</label>

                                                    </div>

                                                </div>
                                                <small><a href="#" className="mt-1" data-bs-target="#forgot_password_step1" data-bs-toggle="modal" data-bs-dismiss="modal">Forgot Password?</a></small>

                                                <div className="col-12">
                                                    <input type="hidden" name="action" value="password_update_step1"/>

                                                    <input type="hidden" name="email" className="email"/>
                                                    <input type="hidden" name="username" className="username"/>
                                                    <input type="hidden" name="type_account" className="type_account"/>
                                                    <button className="btn btn-custom w-100" type="submit" data-bs-target="#login_account_step2" data-bs-toggle="modal" data-bs-dismiss="modal">Update</button>
                                                </div>
                                            </form>
                                        </div>


                                        <div className="password_update_step2 verification_otp-box d-none">


                                            <form className="row g-3 needs-validation" novalidate action="" method="post" id="password_update_verify_otp_code">
                                                <div className="wrapper" id="otp">

                                                    <h3 className="title text-center">OTP Verification</h3>
                                                    <p className="sub-title">Enter the OTP you received to <span className="email-or-number-verification"></span></p>
                                                    <input name="number" type="hidden" id="number"/>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="number" className="form-control otp" name="otp" id="password_floatingInputotp" placeholder="OTP" maxlength="4" required/>
                                                                <label for="password_floatingInputotp">OTP</label>
                                                                <div className="invalid-tooltip">
                                                                    Please Enter 4 Digit OTP Code.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="resend">
                                                        Resend OTP
                                                        <i className="fa fa-caret-right"></i>
                                                    </button>



                                                    <input type="hidden" name="action" value="password_update_verify_otp_code"/>

                                                    <input type="hidden" name="new_password" className="new_password"/>
                                                    <input type="hidden" name="email" className="email"/>

                                                    <input type="hidden" name="username" className="username"/>
                                                    <input type="hidden" name="type_account" className="type_account"/>
                                                    <button className="btn btn-custom w-100" type="submit">Verify</button>

                                                </div>
                                            </form>






                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Email-Update-tab-pane" role="tabpanel" aria-labelledby="Email-Update-tab" tabindex="0">
                                    <div className="step-box email_update_box p-3">

                                        <div className="email_update_step1">
                                            <h3 className="title mb-4 text-center">Email Update</h3>

                                            <form className="row g-3 needs-validation" novalidate action="" method="post" id="user_email_update">
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input type="email" className="form-control" disabled id="inputoldemail" placeholder="Email" required/>
                                                        <input type="hidden" className="form-control inputoldemail" name="old_email"  required/>
                                                        <label for="inputemail">Old email</label>

                                                    </div>

                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input type="email" className="form-control" name="new_email" id="inputnewemail" placeholder="New Email" required/>
                                                        <label for="inputnewemail">Enter new email</label>

                                                    </div>

                                                </div>



                                                <div className="col-12">
                                                    <input type="hidden" name="action" value="user_email_update"/>

                                                    <input type="hidden" name="type_account" className="type_account"/>
                                                    <button className="btn btn-custom w-100" type="submit">Update</button>
                                                </div>
                                            </form>
                                        </div>


                                        <div className="email_update_step2 verification_otp-box d-none">


                                            <form lass="row g-3 needs-validation" novalidate className="mt-5" action="" method="post" id="email_verify_otp_code">
                                                <div className="wrapper" id="otp">

                                                    <div className="box-container">
                                                        <h3 className="title text-center">OTP Verification</h3>
                                                        <p className="sub-title">Enter the OTP you received to <span className="email-or-number-verification"></span></p>
                                                        <input name="new_email" type="hidden" id="new_email"/>
                                                        <input name="old_email" type="hidden" id="old_email"/>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-floating">
                                                                    <input type="number" className="form-control otp" name="otp" id="email_update_floatingInputotp" placeholder="OTP" maxlength="4" required/>
                                                                    <label for="email_update_floatingInputotp">OTP</label>
                                                                    <div className="invalid-tooltip">
                                                                        Please Enter 4 Digit OTP Code.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="resend" name="resend" type="submit">
                                                            Resend OTP
                                                            <i className="fa fa-caret-right"></i>
                                                        </button>
                                                    </div>





                                                    <input type="hidden" name="action" value="email_verify_otp_code"/>

                                                    <input type="hidden" name="type_account" className="type_account"/>
                                                    <button className="btn btn-custom w-100" type="submit">Verify</button>

                                                </div>
                                            </form>


                                        </div>


                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Number-Update-tab-pane" role="tabpanel" aria-labelledby="Number-Update-tab" tabindex="0">
                                    <div className="step-box old_to_new_number_add-box p-3">

                                        <div className="number_update_step1">
                                            <h3 className="title mb-4 text-center">Number Update</h3>


                                            <form className="row g-3 needs-validation" novalidate action="" method="post" id="old_to_newnumber_add_step1">
                                                <div className="col-sm-12">
                                                    <div className="form-floating">
                                                        <input type="number" name="old_number" className="form-control" id="inputoldnumber" placeholder="Number" required disabled/>
                                                        <label for="inputeoldnumber"> Your old number</label>

                                                    </div>

                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-floating">
                                                        <input type="number" name="number" className="form-control" id="inputnewnumber" placeholder="Add New Number" required/>
                                                        <label for="inputnewnumber">Enter new number</label>

                                                    </div>

                                                </div>

                                                <div className="col-12">
                                                    <input type="hidden" name="action" value="number_add_step1"/>
                                                    <input type="hidden" name="username" className="username"/>
                                                    <button className="btn btn-custom w-100" type="submit">Update</button>
                                                </div>
                                            </form>
                                        </div>


                                        <div className="number_update_step2 verification_otp-box d-none">

                                            <form className="row g-3 needs-validation" novalidate action="" method="post" id="old_to_newnumber_add_verify_otp_code">
                                                <div className="wrapper" id="otp">

                                                    <h3 className="title text-center">OTP Verification</h3>
                                                    <p className="sub-title">Enter the OTP you received to <span className="email-or-number-verification"></span></p>
                                                    <input name="number" type="hidden"/>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="number" className="form-control otp" name="otp" id="number_floatingInputotp" placeholder="OTP" maxlength="4" required/>
                                                                <label for="number_floatingInputotp">OTP</label>
                                                                <div className="invalid-tooltip">
                                                                    Please Enter 4 Digit OTP Code.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="resend">
                                                        Resend OTP
                                                        <i className="fa fa-caret-right"></i>
                                                    </button>



                                                    <input type="hidden" name="action" value="number_add_verify_otp_code"/>

                                                    <input type="hidden" name="username" className="username"/>
                                                    <input type="hidden" name="type_account" className="type_account"/>
                                                    <button className="btn btn-custom w-100" type="submit">Verify</button>

                                                </div>
                                            </form>


                                        </div>


                                    </div>
                                </div>
                            </div>










                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Setting