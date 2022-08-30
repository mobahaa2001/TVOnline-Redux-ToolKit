import React from 'react'
import logo from '../images/logo.png'

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <a href="#" className="footer-logo">
            <img src={logo} alt="TVOnline" className="logo" />
          </a>
          <h5 className="text-uppercase">Hello Friend!</h5>
          <p>
            This is a new front-end project with HTML, CSS, BootStrap,
            JavaScript, React, and Redux.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase footer-heading">Account</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="footer-link">
                Create account
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Sign in
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                iOS app
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Android app
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Company</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="footer-link">
                About us
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                For Business
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Training partners
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <a href="https://github.com/mobahaa2001" className="copyright">
        {' '}
        MoBahaaDev
      </a>
    </div>
  </footer>
)

export default Footer
