import {HOST, STUDENT_PROFILE_URL} from '../configURL';

function* fetchStudentProfile(action) {
    var res = {
        status: 0,
        code:"",
        name: "",
        email: "",
        gender: 0,
    };
    yield fetch(STUDENT_PROFILE_URL.STUDENT_PROFILE, {
        method: 'GET',
        headers: {
            'Host': HOST,
            'Authorization': 'Bearer ' + action.access_token,
        }
    }).then(response => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
    })
        .then(([status, data]) => {
            res.status = status;
            data=data['0'];
            if (res.status === 200) {
                res.code=data["code"];
                res.name= data['name'];
                res.email= data['email'];
                res.gender= data['gender'];
            } else {
                console.log("ERROR_STUDENT_PROFILE_API: " + data['error_description']);
                // res.error = data['error_description'];
                res.error = "Không thể lấy dữ liệu từ máy chủ!";
            }
        })
        .catch(error => {
            console.log('ERROR_STUDENT_PROFILE_API: ' + error.toString());
            res.status = 0;
            // res.error = error.toString();
            res.error = "Mất kết nối với máy chủ";
        });

    return res;
}

function* fetchSchedule(action) {

    var res = {
        status: 0,
        error:'',
        data:[]
    };
    yield fetch(STUDENT_PROFILE_URL.STUDENT_SCHEDULE+`?code=${action.code}`, {
        method: 'GET',
        headers: {
            'Host': HOST,
            'Authorization': 'Bearer ' + action.access_token,
        }
    }).then(response => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
    })
        .then(([status, data]) => {

            if (status === 200) {
                res.status = status;
                res.data=data;
            } else {
                console.log("ERROR_STUDENT_PROFILE_API: " + data['error_description']);
                // res.error = data['error_description'];
                res.error = "Không thể lấy dữ liệu từ máy chủ!";
            }
        })
        .catch(error => {
            console.log('ERROR_STUDENT_PROFILE_API: ' + error.toString());
            res.status = 0;
            // res.error = error.toString();
            res.error = "Mất kết nối với máy chủ";
        });

    return res;
}

function* fetchResult(action) {

    var res = {
        status: 0,
        error:'',
        data:[]
    };
    yield fetch(STUDENT_PROFILE_URL.STUDENT_RESULT+`?code=${action.code}`, {
        method: 'GET',
        headers: {
            'Host': HOST,
            'Authorization': 'Bearer ' + action.access_token,
        }
    }).then(response => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
    })
        .then(([status, data]) => {

            if (status === 200) {
                res.status = status;
                res.data=data;
            } else {
                console.log("ERROR_STUDENT_PROFILE_API: " + data['error_description']);
                // res.error = data['error_description'];
                res.error = "Không thể lấy dữ liệu từ máy chủ!";
            }
        })
        .catch(error => {
            console.log('ERROR_STUDENT_PROFILE_API: ' + error.toString());
            res.status = 0;
            // res.error = error.toString();
            res.error = "Mất kết nối với máy chủ";
        });

    return res;
}

function* fetchTuition(action) {

    var res = {
        status: 0,
        error:'',
        data:[]
    };
    yield fetch(STUDENT_PROFILE_URL.STUDENT_TUITION+`?student_code=${action.code}`, {
        method: 'GET',
        headers: {
            'Host': HOST,
            'Authorization': 'Bearer ' + action.access_token,
        }
    }).then(response => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
    })
        .then(([status, data]) => {

            if (status === 200) {
                res.status = status;
                res.data=data;
            } else {
                console.log("ERROR_STUDENT_PROFILE_API: " + data['error_description']);
                // res.error = data['error_description'];
                res.error = "Không thể lấy dữ liệu từ máy chủ!";
            }
        })
        .catch(error => {
            console.log('ERROR_STUDENT_PROFILE_API: ' + error.toString());
            res.status = 0;
            // res.error = error.toString();
            res.error = "Mất kết nối với máy chủ";
        });

    return res;
}

export const studentProfileApi = {
    fetchStudentProfile,
    fetchSchedule,
    fetchResult,
    fetchTuition
}
