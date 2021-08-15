import {createReducer} from '../../Component/Create-reducer/create-reducer';
import {SAGA, STUDENT} from '../constant';

const initialState = {
    unit:undefined
};

const actionHander = {
    [STUDENT.FECTH_STUDENT_INFOR]:(state = initialState, action) => {
        return {...state};
    },
    [SAGA.FECTH_STUDENT_INFOR_SUCCESS]:(state = initialState, action) => {
        return {...state,
            unit: action.unit,
            isError: false
        };
    },
    [SAGA.FECTH_STUDENT_INFOR_FAILED]:(state = initialState, action) => {
        return {...state, error: action.error, isError: true};
    },

    [STUDENT.UPLOAD_AVATAR]: (state = initialState, action) => {
        return {...state};
    },
    [SAGA.UPLOAD_AVATAR_SUCCESS]: (state = initialState, action) => {
        return {...state};
    },
    [SAGA.UPLOAD_AVATAR_FAILED]: (state = initialState, action) => {
        return {...state, isError: true};
    },

    [STUDENT.UPDATE_AVATAR]: (state = initialState, action) => {
        return {...state};
    },
    [SAGA.UPDATE_AVATAR_SUCCESS]: (state = initialState, action) => {
        return {...state};
    },
    [SAGA.UPDATE_AVATAR_FAILED]: (state = initialState, action) => {
        return {...state, isError: true};
    },

    [STUDENT.REMOVE_ERROR]: (state = initialState, action) => {
        return {...state, isError: false};
    },

}

export default createReducer(initialState, actionHander);
