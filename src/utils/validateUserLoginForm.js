export const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.username){
        errors.username = 'Required';
    }
    if (values.username < 6){
        errors.username = 'Must be at least 2 characters';
    }
    else if(values.username > 15){
        errors.username = 'Must be no longer than 15 characters';
    }
    if (values.password < 6){
        errors.password = 'Must be at least 2 characters';
    }
    else if(values.password > 15){
        errors.password = 'Must be no longer than 15 characters';
    }

    return errors;
}