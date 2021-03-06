"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompanyModule from './modules/MobileCompanyModule';


let clientsArr=[ 
  {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200, status: "active"}, 
  {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250, status: "active"}, 
  {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180, status: "active"},
  {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220, status: "block"},
];

ReactDOM.render(
  <MobileCompanyModule 
    clients={clientsArr}
  />
  , document.getElementById('container') 
);
