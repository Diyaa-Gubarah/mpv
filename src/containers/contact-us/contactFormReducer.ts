type Action = {
    type: 'UPDATE_CONTACT_FORM';
    payload: ContactFormState;
} | {
    type: 'SUBMIT_FORM';
    payload: boolean;
} | {
    type: 'SUBMIT_FORM_SUCCESS';
} | {
    type: 'SUBMIT_FORM_FAILED';
    error: string;
}

export interface ContactFormState {
    first?: string;
    last?: string;
    email?: string;
    message?: string;
    loading?: boolean;
    error?: unknown;
}

export const contactFormReducer = (state: ContactFormState, action: Action): ContactFormState => {
    switch (action.type) {
        case 'UPDATE_CONTACT_FORM':
            return {
                ...state,
                ...action.payload
            };
        case 'SUBMIT_FORM':
            return {
                ...state,
                loading: action.payload
            };
        case 'SUBMIT_FORM_SUCCESS':
            return {
                email: "",
                first: "",
                last: "",
                message: "",
                loading: false,
                error: ""
            };
        case 'SUBMIT_FORM_FAILED':
            return {
                email: "",
                first: "",
                last: "",
                message: "",
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
