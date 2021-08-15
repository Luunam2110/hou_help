import { FORM_CONTROL} from '../constant';


const initialState = {
    present_step:1,
    image:[]
};

export default function FormReducer(state = initialState, action) {
    switch (action.type) {
        case FORM_CONTROL.NEXT_STEP:
        {
            return {...state, present_step: state.present_step+1}
        }
        case FORM_CONTROL.PREVIOUS_STEP:
        {

            return {...state, present_step: action.Previous_step}
        }
        case FORM_CONTROL.EDIT_IMAGE:
        {
            return {...state,image:action.uri}
        }
        default:
            return state;
    }
}

