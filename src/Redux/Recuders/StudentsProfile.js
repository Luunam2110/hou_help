import {createReducer} from '../../Component/Create-reducer/create-reducer';
import {SAGA, STUDENT_PROFILE} from '../constant';

const initialState = {
    schedule: [],
    result: [],
    tuition: [],

    code: undefined,
    name: undefined,
    email: undefined,
    gender: undefined,
};

const actionHander = {
    [STUDENT_PROFILE.FECTH_STUDENT_SCHEDULE]: (state = initialState, action) => {
        return {...state};
    },
    [STUDENT_PROFILE.FECTH_STUDENT_SCHEDULE_SUCCESS]: (state = initialState, action) => {
        return {
            ...state,
            schedule: action.data,
        };
    },
    [STUDENT_PROFILE.FECTH_STUDENT_RESULT]: (state = initialState, action) => {
        return {...state};
    },
    [STUDENT_PROFILE.FECTH_STUDENT_RESULT_SUCCESS]: (state = initialState, action) => {
        return {
            ...state,
            result: action.data,
        };
    },
    [STUDENT_PROFILE.FECTH_STUDENT_TUITION]: (state = initialState, action) => {
        return {...state};
    },
    [STUDENT_PROFILE.FECTH_STUDENT_TUITION_SUCCESS]: (state = initialState, action) => {
        return {
            ...state,
            tuition: action.data,
        };
    },


    [STUDENT_PROFILE.FECTH_STUDENT_PROFILE]: (state = initialState, action) => {
        return {...state};
    },
    [SAGA.FECTH_STUDENT_PROFILE_SUCCESS]: (state = initialState, action) => {
        return {
            ...state,
            code: action.code,
            name: action.name,
            email: action.email,
            gender: action.gender,
            isError: false,
        };
    },
    [SAGA.FECTH_STUDENT_PROFILE_FAILED]: (state = initialState, action) => {
        return {...state, error: action.error, isError: false};
    },
};

export default createReducer(initialState, actionHander);
