"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './components/IShop';

let shopTitle='iShop';
let shopGoodsArr=require('./goods.json');


ReactDOM.render(
  <IShop 
    title={shopTitle}
    goods={shopGoodsArr}
  />
  , document.getElementById('container') 
);
