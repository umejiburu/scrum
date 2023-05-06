import React from 'react'
import profile from './img/profile.png'
import {AiFillStar} from 'react-icons/ai'

function Reviews() {
  return (
    <div className="pt-6">
      <div className="flex justify-between align-middle mt-0">
        <div className="flex">
          <img className="w-9" src={profile} alt="" />
          <p className="pl-1">
            Noni Marilyn{" "}
            <i className="flex">
              <AiFillStar className="text-orange-500 hover:text-orange-500" />
              <AiFillStar className="text-orange-500 hover:text-orange-500" />
              <AiFillStar className="hover:text-orange-500" />
              <AiFillStar className="hover:text-orange-500" />
            </i>
          </p>
        </div>
        <p>12/3/23</p>
      </div>
      <p className="pt-1">
        Recently, I decided to face my fears of cooking something other from
        noodles. and I decided to start with the soup of all soups. Am I a pro
        now? (smiles)
      </p>
      <hr />
    </div>
  );
}

export default Reviews