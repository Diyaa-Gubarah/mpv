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
import { postRequest } from "../../services";

const ContactForm: React.FC = () => {
  const [state, dispatch] = useReducer(contactFormReducer, {
    first: "",
    last: "",
    email: "",
    message: "",
    loading: false,
    error: "",
    success: "",
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

  const handleSubmit = useCallback(async () => {
    //use post api
    dispatch({
      type: "SUBMIT_FORM",
      payload: true,
    });

    try {
      const response = await postRequest(
        "https://jsonplaceholder.typicode.com/posts",
        { userId: 1, title: state.first, body: state.message }
      );
      dispatch({
        type: "SUBMIT_FORM_SUCCESS",
        success: "Your Message Successfully Submitted",
      });

      setTimeout(() => {
        dispatch({
          type: "SUBMIT_FORM_SUCCESS",
          success: null,
        });
      }, 2000);
    } catch (error) {
      dispatch({
        type: "SUBMIT_FORM_FAILED",
        error: "Failed T Send Your Message. ",
      });

      setTimeout(
        () =>
          dispatch({
            type: "SUBMIT_FORM_FAILED",
            error: null,
          }),
        2000
      );
    }
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
      {(state.error || state.success) && (
        <Box
          js="center"
          color={state.error ? "#ff0066" : "#00ff99"}
          padding="0.5em 0"
        >
          <Text color={"#fff"} ta="center" fontSize="1em">
            {state.error || state.success}
          </Text>
        </Box>
      )}
    </>
  );
};

export default ContactForm;
