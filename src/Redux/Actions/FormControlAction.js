import {FORM_CONTROL} from '../constant';

export function Next(){
    return {
        type:FORM_CONTROL.NEXT_STEP
    }
}
export function EditImage(uri){
    return {
        type:FORM_CONTROL.EDIT_IMAGE,
        uri
    }
}
export function Previous(Previous_step){

    return {
        type:FORM_CONTROL.PREVIOUS_STEP,
        Previous_step
    }
}
