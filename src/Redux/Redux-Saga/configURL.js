export const HOST = 'core.hou.edu.vn';
export const DVC= 'dvc.hou.edu.vn/';
const DEFAULT_BASE_API = 'https://core.hou.edu.vn/mdm/rest/v2';
const CUSTOM_BASE_API = 'https://core.hou.edu.vn/mdm/rest/api';
export const USER_URL = {
    LOGIN: DEFAULT_BASE_API + '/oauth/token',
    LOGOUT: DEFAULT_BASE_API + '/oauth/revoke',
    USER_INFOR: CUSTOM_BASE_API + '/user/userInfo',
    CHANGE_PASSWORD: CUSTOM_BASE_API + '/user/changePassword',
};

export const STUDENT_URL = {
    STUDENT_INFOR: CUSTOM_BASE_API + '/student',
    STUDENT_UPLOAD_AVATAR: DEFAULT_BASE_API + '/files',
    STUDENT_UPDATE_AVATAR: CUSTOM_BASE_API + '/student/update-avatar',
};

export const STUDENT_PROFILE_URL = {
    STUDENT_PROFILE: CUSTOM_BASE_API + '/student_profile',
    STUDENT_SCHEDULE: CUSTOM_BASE_API + '/students/schedules',
    STUDENT_RESULT: CUSTOM_BASE_API + '/students/results',
    STUDENT_TUITION: CUSTOM_BASE_API + '/students/tuitions'
};
export const FEEDBACK_URL = {
    SEND_FEEDBACK: CUSTOM_BASE_API + '/feedback'
};
