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
  const dispatch = useAppDispatch();
  const first = useAppShallowSelector(selectFirst);
  const last = useAppShallowSelector(selectLast);
  const email = useAppShallowSelector(selectEmail);
  const message = useAppShallowSelector(selectMessage);
  const error = useAppShallowSelector(selectError);
  const loading = useAppShallowSelector(selectLoading);

  //   const [state, dispatch] = useReducer(contactFormReducer, {
  //     first: "",
  //     last: "",
  //     email: "",
  //     message: "",
  //   });

  console.log({
    loading,
  });

  const handleChange = useCallback(() => {
    dispatch(
      submitForm({
        first,
        last,
        email,
        message,
      })
    );
  }, [first, last, email, message]);

  return (
    <>
      <Box gap="1em" height="auto">
        <Input
          name="first"
          onChange={(event) =>
            dispatch(actions.updateFirst(event.target.value))
          }
          type="text"
          value={first || ""}
          placeholder="Write Your First Name"
          width="50%"
        />
        <Input
          name="last"
          onChange={(event) => dispatch(actions.updateLast(event.target.value))}
          type="text"
          value={last || ""}
          placeholder="Write Your Last Name"
          width="50%"
        />
      </Box>
      <Input
        name="email"
        onChange={(event) => dispatch(actions.updateEmail(event.target.value))}
        type="email"
        value={email || ""}
        placeholder="Write Your Email"
      />

      <TextArea
        name="message"
        onChange={(event) =>
          dispatch(actions.updateMessage(event.target.value))
        }
        value={message || ""}
        placeholder="Write Your Message"
      />
      <Text
        color="#fff"
        type="button"
        background="#000"
        onClick={() => handleChange()}
        margin="1em 0"
        padding="0.25em 1.5em"
        fontSize="0.75em"
        width="max-content"
        ta="center"
      >
        Click
      </Text>
    </>
  );
};

export default ContactForm;
