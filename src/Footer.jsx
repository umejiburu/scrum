import React from 'react'
import jollof from './img/jollof.png'
import {AiOutlineEye} from 'react-icons/ai'
import { describe } from "./Describe";

function Footer() {
  return (
    <div>
      <div className="flex justify-between">
        <h3>Explore More Recipes</h3>
        <a href="#">View All</a>
      </div>
      <div>
        <div>
          {describe.map((item) => (
            <>
              <img src={item?.img} alt="" className="max-w-xs" />
            </>
          ))}
          <a>shop Recipe</a>
          <h5>jellof rice</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit sum....
          </p>
          <button>
            view as <AiOutlineEye />
          </button>
        </div>
      </div>
      <hr />
      <div></div>
    </div>
  );
}

export default Footer