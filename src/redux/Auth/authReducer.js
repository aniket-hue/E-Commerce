const initialState = {
    password: '',
    email: '',
    passwordForSignup: '',
    emailForSignup: '',
    name: '',
    confirmPassword: ''
}

const authReduecer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'password':
            return {
                ...state,
                password: action.value
            }
        case 'email':
            return {
                ...state,
                email: action.value
            }
        case 'passwordForSignup':
            return {
                ...state,
                passwordForSignup: action.value
            }
        case 'emailForSignup':
            return {
                ...state,
                emailForSignup: action.value
            }
        case 'name':
            return {
                ...state,
                name: action.value
            }
        case 'confirmPassword':
            return {
                ...state,
                confirmPassword: action.value
            }
        default:
            return state;
    }
}

export default authReduecer;