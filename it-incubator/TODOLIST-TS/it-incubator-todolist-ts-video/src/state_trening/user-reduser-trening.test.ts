import React from 'react';
import {userReducerTrening} from './user-reduser-trening';


test('user reduser should increment only age', () => {
    const startState = {
        age: 20,
        childrenCount: 2,
        name: 'Dimych',
        status: 'user'
    };

    const endState =
        userReducerTrening(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
});

test('user reduser should increment only childrenCount', () => {
    const startState = {
        age: 20,
        childrenCount: 2,
        name: 'Dimych',
        status: 'guest'
    };
    const endState =
        userReducerTrening(startState, {type: 'INCREMENT-CHILDREN-COUNT'})

    expect(endState.age).toBe(20)
    expect(endState.childrenCount).toBe(3)
});

test('user reduser should change name user', () => {
    const startState = {
        age: 20,
        childrenCount: 2,
        name: 'Dimych',
        status: 'user'
    };
    const newName = 'Victor'
    const endState =
        userReducerTrening(startState, {type: 'CHANGE-NAME', newName: newName})
    expect(endState.name).toBe(newName)
});

test('user reduser should change status user', () => {
    const startState = {
        age: 20,
        childrenCount: 2,
        name: 'Dimych',
        status: 'user'
    };
    const newStatus = 'user'
    const endState =
        userReducerTrening(startState, {type: 'CHANGE-STATUS-USER', newStatus: newStatus})
    expect(endState.status).toBe(newStatus)
});

test('user reduser should change status guest', () => {
    const startState = {
        age: 20,
        childrenCount: 2,
        name: 'Dimych',
        status: 'user'
    };
    const newStatus = 'guest'
    const endState =
        userReducerTrening(startState, {type: 'CHANGE-STATUS-GUEST', newStatus: newStatus})
    expect(endState.status).toBe(newStatus)
});

