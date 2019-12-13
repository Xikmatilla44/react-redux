import * as actionsTypes from './actionsTypes'


export const addStudent = (student)=>({

    type: actionsTypes.ONE_ADD_STUDENT,
    payload:student

});