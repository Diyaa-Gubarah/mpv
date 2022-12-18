import { Box, Input, Text, TextArea } from "../../components/index";
import {
  actions,
  selectEmail,
  selectError,
  selectFirst,
  selectLast,
  selectLoading,
  selectMessage,
  submitForm,
} from "../../store/reducers/formSlice";
import { useAppDispatch, useAppShallowSelector } from "../../hooks";
import { useCallback, useReducer } from "react";

import { AnyAction } from "@reduxjs/toolkit";
import { contactFormReducer } from "./contactFormReducer";

const ContactForm: React.FC = () => {
  const [state, dispatch] = useReducer(contactFormReducer, {
    first: "",
    last: "",
    email: "",
    message: "",
    loading: false,
    error: null,
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch({
        type: "UPDATE_CONTACT_FORM",
        payload: {
          [event.target.name]: event.target.value,
        },
      });
    },
    [state.first, state.last, state.email, state.message]
  );

  const handleSubmit = useCallback(() => {
    //use post api
    dispatch({
      type: "SUBMIT_FORM",
      payload: true,
    });

    setTimeout(() => {
      dispatch({
        type: "SUBMIT_FORM",
        payload: false,
      });
    }, 3000);
  }, []);

  return (
    <>
      <Box gap="1em" height="auto">
        <Input
          name="first"
          onChange={handleChange}
          type="text"
          value={state.first || ""}
          placeholder="Write Your First Name"
          width="50%"
        />
        <Input
          name="last"
          onChange={handleChange}
          type="text"
          value={state.last || ""}
          placeholder="Write Your Last Name"
          width="50%"
        />
      </Box>
      <Input
        name="email"
        onChange={handleChange}
        type="email"
        value={state.email || ""}
        placeholder="Write Your Email"
      />

      <TextArea
        name="message"
        onChange={handleChange}
        value={state.message || ""}
        placeholder="Write Your Message"
      />
      <Text
        color="#fff"
        type="button"
        background="#000"
        onClick={handleSubmit}
        margin="1em 0"
        padding="0.25em 1.5em"
        fontSize="0.75em"
        width="max-content"
        ta="center"
      >
        {state.loading ? "Loading ..." : "Click"}
      </Text>
      <Box
        js="center"
        color={state.error ? "#ff0066" : "#00ff99"}
        padding="0.5em 0"
      >
        <Text color={"#fff"} ta="center" fontSize="1em">
          error
        </Text>
      </Box>
    </>
  );
};

export default ContactForm;
