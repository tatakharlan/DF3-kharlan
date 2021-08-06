"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import MobileCompanyModule from '../modules/MobileCompanyModule';

test('MobileCompanyModule', () => {


    const component = renderer.create(
        <MobileCompanyModule />
      );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const addUser = component.root.find( el => el.props.value=='Добавить'); 
    
    addUser.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const showAll = component.root.find( el => el.props.value=='Все'); 
    
    showAll.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const showActive = component.root.find( el => el.props.value=='Активные'); 
    
    showActive.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const showBlock = component.root.find( el => el.props.value=='Заблокированные'); 
    
    showBlock.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const editUser = component.root.find( el => el.props.value=='Редактировать'); 
    
    editUser.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const deleteUser = component.root.find( el => el.props.value=='Удалить'); 
    
    deleteUser.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

});
