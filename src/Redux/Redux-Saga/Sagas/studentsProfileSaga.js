import {SAGA, STUDENT_PROFILE} from '../../constant';
import {put, takeLatest} from 'redux-saga/effects';
import {studentProfileApi} from '../API/studentProfileApi';

function* fetchStudentProfile(action) {
    try {
        var response = yield studentProfileApi.fetchStudentProfile(action);
        if (response.status === 200) {
            // console.log(response.name+ " " + response.dob);
            yield put({
                type: SAGA.FECTH_STUDENT_PROFILE_SUCCESS,
                code: response.code,
                name: response.name,
                email: response.email,
                gender: response.gender,
            });

            yield put({
                type: STUDENT_PROFILE.FECTH_STUDENT_TUITION,
                code: response.code,
                access_token: action.access_token,
            });

        } else {
            yield put({type: SAGA.FECTH_STUDENT_PROFILE_FAILED, error: response.error});
        }
    } catch (e) {
        yield put({type: SAGA.FECTH_STUDENT_PROFILE_FAILED, error: e});
        console.log(e);
    }
}

function* fetchStudentSchedule(action) {

    try {
        var response = yield studentProfileApi.fetchSchedule(action);
        if (response.status === 200) {

            let data = [];
            response.data.forEach(item => {
                let itemData = {};
                itemData.date = item.date;
                itemData.week = new Date(item.week);
                itemData.detail = item.detail;
                data.push(itemData);
            });

            // console.log(response.name+ " " + response.dob);
            yield put({
                type: STUDENT_PROFILE.FECTH_STUDENT_SCHEDULE_SUCCESS,
                data: data,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

function* fetchStudentResult(action) {

    try {
        var response = yield studentProfileApi.fetchResult(action);
        if (response.status === 200) {
            yield put({
                type: STUDENT_PROFILE.FECTH_STUDENT_RESULT_SUCCESS,
                data: response.data,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

function* fetchStudentTuition(action) {

    try {
        var response = yield studentProfileApi.fetchTuition(action);
        if (response.status === 200) {
            response.data.sort(compareByCode);
            yield put({
                type: STUDENT_PROFILE.FECTH_STUDENT_TUITION_SUCCESS,
                data: response.data,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export function compareByCode( a, b ) {
    return b.tuitionCode.localeCompare(a.tuitionCode);
}

export function* watchFetchStudentProfile() {
    yield takeLatest(STUDENT_PROFILE.FECTH_STUDENT_PROFILE, fetchStudentProfile);
    yield takeLatest(STUDENT_PROFILE.FECTH_STUDENT_SCHEDULE, fetchStudentSchedule);
    yield takeLatest(STUDENT_PROFILE.FECTH_STUDENT_RESULT, fetchStudentResult);
    yield takeLatest(STUDENT_PROFILE.FECTH_STUDENT_TUITION, fetchStudentTuition);
}
