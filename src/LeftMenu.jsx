import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

function LeftMenu() {
  return (
    <div className='pt-12'>
      <div className="flex align-middle relative">
        <AiOutlineSearch className="absolute left-2 top-1 pr-0.5" />
        <input type="search" placeholder="Search" className="pl-5" />
      </div>
      <br />
      <h4 className="font-bold">By Top Trending</h4>
      <hr />
      <a>Small Chops</a>
      <hr />
      <a>Yamarita</a>
      <hr />
      <a>Ofe Akwu Stew</a>
      <hr />
      <a>Ukwa</a>
      <hr />
      <br />
      <h4 className="font-bold">By Popularity</h4>
      <hr />
      <a>Jollof Rice</a>
      <hr />
      <a>Egusi Soup</a>
      <hr />
      <a>Plantain Porridge</a>
      <hr />
      <a>Fried Rice</a>
      <hr />
      <a>Chicken sauce</a>
      <hr />
      <br />
      <h4 className="font-bold">Ethnic Group</h4>
      <hr />
      <a>Igbo Recipes</a>
      <hr />
      <p>Yoruba Recipes</p>
      <hr />
      <a>Efik Recipes</a>
      <hr />
      <a>All</a>
      <hr />
    </div>
  );
}

export default LeftMenu