import React from 'react'
import {AiOutlineSetting} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'

function Header() {
  return (
    <>
      <div className="flex pt-3">
        <div>
          <h3>CHOP NAIJA</h3>
        </div>
        <div className="header_links flex grow align-middle justify-center ">
          <a className="pr-9" href="#">
            Home
          </a>
          <a className="pr-9" href="#">
            Categories
          </a>
          <a className="pr-9" href="#">
            Blog
          </a>
          <a className="pr-9" href="#">
            About
          </a>
          <a className="pr-9" href="#">
            Contact Us
          </a>
        </div>
        <div className="flex">
          <AiOutlineSetting className="mr-2" />
          <CgProfile />
        </div>
      </div>
      <br />
      <hr />
    </>
  );
}

export default Header