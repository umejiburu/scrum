import React from 'react'
import egusi from './img/egusi.png'
import {AiOutlineShareAlt} from 'react-icons/ai'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import Tabs from './Tabs';


function Content() {
  return (
    <div>
      <div>
        <div className='pt-4'>
          <p>Home > Igbo Recipes > Soup > Egusi</p>
        </div>
        <div>
          <br />
          <img className="max-w-3xl" src={egusi} alt="" />
          <br />
          <div className="flex justify-between">
            <div className="flex">
              <h2 className="font-bold text-2xl">Egusi Soup</h2>
              <button>Soup Recipe</button>
            </div>
            <div className="flex">
              <MdOutlineFavoriteBorder className="text-amber-500" />
              <AiOutlineShareAlt className="text-red-500" />
            </div>
          </div>
        </div>
        <p>
          {" "}
          Egusi Soup is a beloved favorite in Nigeria and beyond!The magic of
          egusi soup lies in its ability to bring people together and create a
          sense of community around the dinner table. One fascinating thing
          about egusi soup is the way it can be customized to suit different
          tastes and preferences. Some people prefer a thicker soup with more
          vegetables, while others like a thinner broth with plenty of meat. No
          matter how you choose to make your egusi soup, it is sure to be a
          crowd-pleaser!
        </p>
        <br />
      </div>
      <Tabs />
    </div>
  );
}

export default Content