import { ICake } from '../models'
import { fetchCakes, addCake } from '../api/cakes';
import { push } from 'react-router-redux';

export enum CakeActions {
    GET_CAKES_SUCCESS = 'GET_CAKES_SUCCESS',
    GET_CAKES_ERROR = 'GET_CAKES_ERROR',

    ADD_CAKE_SUCCESS = 'ADD_CAKE_SUCCESS',
    ADD_CAKE_ERROR = 'ADD_CAKE_ERROR'
}

export function fetchCakeAction() {
    return (dispatch: any) => {
        return fetchCakes().then((cakes: ICake[]) => {
            dispatch(loadCakesSuccess(cakes))
        }).catch((e) => dispatch(loadCakesError()))
    }
}

export function addCakeAction(cake: ICake) {
    debugger;
    return (dispatch: any) => {
        return addCake(cake)
            .then((response: ICake) => {
                if (response && response.id !== '') {
                    addCakeSuccess(response);
                    dispatch(push('/'));
                } else {
                    addCakeError()
                }
            }).catch((e) => addCakeError())
    }
}

export type CakeActionTypes =
    IGetCakesSuccess |
    IGetCakesError |
    IAddCakeSuccess |
    IAddCakeError;

export interface IGetCakesSuccess {
    type: CakeActions.GET_CAKES_SUCCESS,
    payload: { cakes: ICake[] }
}

export interface IGetCakesError {
    type: CakeActions.GET_CAKES_ERROR;
}

export interface IAddCakeSuccess {
    type: CakeActions.ADD_CAKE_SUCCESS,
}

export interface IAddCakeError {
    type: CakeActions.ADD_CAKE_ERROR;
}

export function loadCakesSuccess(cakes: ICake[]): IGetCakesSuccess {
    return {
        type: CakeActions.GET_CAKES_SUCCESS,
        payload: {
            cakes
        }
    }
}

export function loadCakesError(): IGetCakesError {
    return {
        type: CakeActions.GET_CAKES_ERROR
    }
}

export function addCakeSuccess(responseDataShow: any): IAddCakeSuccess {
    debugger;
    console.log(responseDataShow.status);
    return {
        type: CakeActions.ADD_CAKE_SUCCESS
    }
}

export function addCakeError(): IAddCakeError {
    return {
        type: CakeActions.ADD_CAKE_ERROR
    }
}
