"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompanyModule from '../modules/MobileCompanyModule';

test( () => {


    const component = renderer.create(
        <MobileCompanyModule />
      );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const addUser = component.root.find( el => el.value=='Добавить'); 
    
    addUser.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();


});
