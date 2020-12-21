import React,  {useReducer, useCallback }  from 'react'
import { useDialog } from 'react-st-modal';
import { saveComment } from "../../store/actions/tweet";
import InputText from "./InputText";

const FORM_INPUT_VALIDATE = "FORM_INPUT_VALIDATE";
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_VALIDATE) {
    const updateValues = {
      ...state.inputsValues,
      [action.input]: action.value
    };
    const updateValidities = {
      ...state.inputsValidities,
      [action.input]: action.isValid
    };
    let updateFormIsValid = true;
    for (const key in updateValidities) {
      updateFormIsValid = updateFormIsValid && updateValidities[key];
    }
    return {
      inputsValues: updateValues,
      inputsValidities: updateValidities,
      formIsValid: updateFormIsValid
    };
  }
  return state;
};

const DialogComment = props => {
    const dialog = useDialog();
    const [formState, dispatchFromState] = useReducer(formReducer, {
        inputsValues: {
            comment_text: ""
        },
        inputsValidities: {
            comment_text: false,
        },
        formIsValid: false
      });

      const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
          dispatchFromState({
            type: FORM_INPUT_VALIDATE,
            isValid: inputValidity,
            value: inputValue,
            input: inputIdentifier
          });
        },
        [dispatchFromState]
      );
  
      const submitHandler =  () => {
        if (!formState.formIsValid) {
          console.log('Please say anything..')
          return;
        }
        
        dialog.close("done");
         props.dispatch(saveComment(
          formState.inputsValues.comment_text, 
          props.tweetId, props.from
        ))
        console.log('Is a  valid form'); return;

      };

    return (
        <fieldset className="login-fieldset">

        <InputText
           type="textarea"
           id="comment_text"
           name="comment_text"
           styleInput=""
           placeholder="Your comment ?"
           errorText="Please say anything.."
           value={formState.inputsValues.tweetText}
           onInputChange={inputChangeHandler}
           initialValue=""
           style={{border:'none', backgroundColor:'transparent', resize:'none', outline:'none'}}
           initiallyValid={false}
           required
            />

        <button onClick={submitHandler}
                     type="button" 
                     className="btn btn-primary float-right disabled mr-1 mb-1 ">Answer</button>
      </fieldset>
    );
}

export default DialogComment