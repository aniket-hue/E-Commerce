export const authAction = {
    email: (value) => ({
        type: 'email',
        value:value
    }),
    password: (value) => ({
        type: 'password',
        value:value
    }),
    passwordForSignup: (value) => ({
        type: 'passwordForSignup',
        value: value.value
    }),
    emailForSignup: (value) => ({
        type: 'emailForSignup',
        value: value.value
    }),
    name: (value) => ({
        type: 'name',
        value: value.value
    }),
    confirmPassword: (value) => ({
        type: 'confirmPassword',
        value: value.value
    }),
}



    ;