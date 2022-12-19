type Action = {
    type: 'UPDATE_CONTACT_FORM';
    payload: ContactFormState;
} | {
    type: 'SUBMIT_FORM';
    payload: boolean;
} | {
    type: 'SUBMIT_FORM_SUCCESS';
    success: string | null
} | {
    type: 'SUBMIT_FORM_FAILED';
    error: string | null;
}

export interface ContactFormState {
    first?: string;
    last?: string;
    email?: string;
    message?: string;
    loading?: boolean;
    error?: any;
    success?: any;
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
                loading: action.payload,
                error: null,
                success: null

            };
        case 'SUBMIT_FORM_SUCCESS':
            return {
                email: "",
                first: "",
                last: "",
                message: "",
                loading: false,
                error: null,
                success: action.success
            };
        case 'SUBMIT_FORM_FAILED':
            return {
                email: "",
                first: "",
                last: "",
                message: "",
                loading: false,
                success: null,
                error: action.error
            };
        default:
            return state;
    }
}
