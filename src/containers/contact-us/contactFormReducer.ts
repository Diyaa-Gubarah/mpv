type Action = {
    type: 'UPDATE_CONTACT_FORM';
    payload: ContactFormState;
}

export interface ContactFormState {
    first?: string;
    last?: string;
    email?: string;
    message?: string;
}

export const contactFormReducer = (state: ContactFormState, action: Action): ContactFormState => {
    switch (action.type) {
        case 'UPDATE_CONTACT_FORM':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
