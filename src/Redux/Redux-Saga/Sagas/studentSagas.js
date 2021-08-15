import {SAGA, STUDENT} from '../../constant';

import {put, takeLatest} from 'redux-saga/effects';
import {studentApi} from '../API/studentApi';


function* fetchStudentInfor(action) {
    try{
        var response = yield studentApi.fetchStudentInfor(action);
        if(response.status === 200){
            yield put({type: SAGA.FECTH_STUDENT_INFOR_SUCCESS,
                unit: response.unit
            });
        }else {
            yield put({type: SAGA.FECTH_STUDENT_INFOR_FAILED, error: response.error});
        }
    }catch (e) {
        yield put({type: SAGA.FECTH_STUDENT_INFOR_FAILED, error: e});
        console.log(e);
    }
}

export function* watchFetchStudentInfor() {
    yield takeLatest(STUDENT.FECTH_STUDENT_INFOR, fetchStudentInfor);
}

