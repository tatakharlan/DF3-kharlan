"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient';

test('работа MobileClient', () => {
    const component = renderer.create(
        <MobileClient />
      );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const filterBtnAll = component.root.find( el => el.type=='input' /*&& el.props.aaa == 'bbb'*/ ); 
    // и "нажмём" на неё
    buttonElem.props.onClick();



});
