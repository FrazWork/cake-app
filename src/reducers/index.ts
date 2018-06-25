import { CakeActions, CakeActionTypes } from '../actions';
import { ICakeAppStore } from '../models';

export function cakeAppReducer(state: ICakeAppStore, action: CakeActionTypes): ICakeAppStore {
    switch (action.type) {
        case CakeActions.GET_CAKES_SUCCESS:
            return { ...state, cakes: action.payload.cakes };
    }
    return state;
}
