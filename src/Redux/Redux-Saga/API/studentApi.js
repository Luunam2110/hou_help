import {HOST, STUDENT_URL} from '../configURL';

function* fetchStudentInfor(action) {
    var res = {
        unit:""
    };

    yield fetch(STUDENT_URL.STUDENT_INFOR, {
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
                res.unit = data["local_unit"]["name"]
            } else {
                console.log("ERROR_STUDENT_API: " + data['error_description']);
                // res.error = data['error_description'];
                res.error = "Không thể lấy dữ liệu từ máy chủ!";
            }
        })
        .catch(error => {
            console.log("ERROR_STUDENT_API: " + error.toString());
            res.status = 0;
            // res.error = error.toString();
            res.error = "Mất kết nối với máy chủ";
        });

    return res;
}

export const studentApi = {
    fetchStudentInfor,
}
