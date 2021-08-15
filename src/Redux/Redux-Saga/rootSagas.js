import {all, fork} from 'redux-saga/effects';
import * as UserSagas from './Sagas/userSagas';
import * as StudentProfileSagas from './Sagas/studentsProfileSaga';
import * as StudentSagas from './Sagas/studentSagas';
export default function* rootSaga() {
    yield all([
        fork(UserSagas.watchGetCurrentUserInDB),
        fork(UserSagas.watchUserLogin),
        fork(UserSagas.watchUserLogout),
        fork(UserSagas.watchCheckAccessTokenIsActive),
        fork(UserSagas.watchDeleteCurrentUserInDB),
        fork(UserSagas.watchSaveCurrentUserToDB),
        fork(StudentProfileSagas.watchFetchStudentProfile),
        fork(StudentSagas.watchFetchStudentInfor),
    ]);
}
