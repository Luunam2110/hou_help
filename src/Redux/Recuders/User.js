import {SAGA, USER} from '../constant';
import {createReducer} from '../../Component/Create-reducer/create-reducer';

const initialState = {
    isLogged: false,
    isLoadding: true,
    isError: false,
    access_token: undefined,
    access_token_stringee: undefined,
    access_token_mbaas: undefined,
    type_account: undefined,
    username: undefined,
    password: undefined,
    error: undefined,
    name: undefined,
    avatarId: undefined,
    changing_password:false,
    result_change_password:'wait',
    error_change_password:'',
    unit:undefined
}

const actionHander = {
    [USER.LOGIN]: (state = initialState, action) => {
        return {
            ...state,
            username: action.username,
            password: action.password,
            isLoadding: true,
            isError: false,
            error: ""
        };
    },
    [SAGA.USER_LOGIN_SUCCESS]: (state = initialState, action) => {
        return {isLogged: false, access_token: action.access_token, username: action.username, error: '', password: ''};
    },
    [SAGA.USER_LOGIN_FAILED]: (state = initialState, action) => {
        return {...state, isLogged: false, error: action.error, isError: true, isLoadding: false};
    },

    [USER.LOGOUT]: (state = initialState, action) => {
        return {
            ...state,
            isLogged: false,
            isLoadding: true,
            isError: false,
            access_token: undefined,
            access_token_stringee: undefined,
            access_token_mbaas: undefined,
            type_account: 0,
            username: undefined,
            password: undefined,
            error: undefined,
            avatarId: undefined,
            changing_password:false,
            result_change_password:'wait',
            error_change_password:'',
            unit:undefined
        };
    },
    [SAGA.USER_LOGOUT_SUCCESS]: (state = initialState) => {
        return {...state, isLoadding: false};
    },
    [SAGA.USER_LOGOUT_FAILED]: (state = initialState, action) => {
        return {...state, error: action.error, isLoadding: false};
    },

    [USER.GET_CURRENT_USER_IN_DB]: (state = initialState) => {
        return {...state, isLoadding: true};
    },
    [SAGA.GET_CURRENT_USER_IN_DB_SUCCESS]: (state = initialState, action) => {
        return {
            ...state,
            isLogged: false,
            username: action.username,
            access_token: action.access_token,
            unit:action.unit,
            access_token_mbaas:action.access_token_mbaas,
            type_account:action.type_account
        };
    },
    [SAGA.GET_CURRENT_USER_IN_DB_FAILED]: (state = initialState) => {
        return {...state, isLogged: false, isLoadding: false};
    },
    [USER.CHECK_ACCESS_TOKEN_IS_ACTIVE]: (state = initialState) => {
        return {...state, isLoadding: true};
    },
    [SAGA.CHECK_ACCESS_TOKEN_IS_ACTIVE_SUCCESS]: (state = initialState, action) => {
        console.log(action);
        return {
            ...state,
            username: action.username,
            isLogged: true,
            avatarId: action.avatarId,
            isLoadding: false,
            isError: false,
            access_token_stringee: action.access_token_stringee,
            access_token_mbaas: action.access_token_mbaas,
            unit: action.unit,
            type_account: action.type_account
        };
    },
    [SAGA.CHECK_ACCESS_TOKEN_IS_ACTIVE_FAILED]: (state = initialState, action) => {
        return {...state, isLogged: false, isLoadding: false, isError: true, error: action.error};
    },

    [USER.UPDATE_AVATAR]: (state = initialState, action) => {
        return {...state, avatarId: action.avatarId};
    },


    // Thay đổi mật khẩu
    [USER.CHANGE_PASSWORD]: (state = initialState, action) => {
        return {
            ...state,
            changing_password: true
        };
    },

    [USER.RESULT_CHANGE_PASSWORD]: (state = initialState, action) => {

        let error="";
        if(action.result==='fail'){
            error=action.error;
        }

        return {
            ...state,
            changing_password: false,
            result_change_password: action.result,
            error_change_password:error
        };
    },
}

export default createReducer(initialState, actionHander);
