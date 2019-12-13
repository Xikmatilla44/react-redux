import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    students:null,
    isReady: false,

};


const students = (state = initialState, action) => {
    
    switch (action.type) {

        case actionsTypes.ADD_STUDENT: return {
            ...state,
            students: action.payload,
            isReady: true

        };
        case 'SAM_STUDENT': return { students: 'onStudent' };
        case 'M_STUDENT': return {

            students: action.payload

        };


    }

    return state;
};

export default students;

