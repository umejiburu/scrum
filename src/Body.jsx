import React from 'react'
import Content from './Content';
import LeftMenu from './LeftMenu';

function Body() {
  return (
    <div className="flex">
      <LeftMenu className="grow" />
      <Content />
    </div>
  );
}

export default Body