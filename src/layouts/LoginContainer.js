import React, {useReducer, useCallback} from 'react';
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/user";
import InputText from "../components/UI/InputText";
import '../css/login.css'

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


function LoginContainer() {
  const dispatch = useDispatch()
  const userError = useSelector( state => state.user.error)
  const [formState, dispatchFromState] = useReducer(formReducer, {
    inputsValues: {
      email: "",
      password: ""
    },
    inputsValidities: {
      email: false,
      password: false
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

  const submitHandler = async () => {
    if (!formState.formIsValid) {
      console.log('No valid form')
      return;
    }
    await dispatch(
      login(
        formState.inputsValues.email,
        formState.inputsValues.password
      )
    );
    console.log('Is a  valid form')
    return <Redirect to="/" />
  };

  return (
   <div className="container">
      <main className="main">
        <a className="button-twitter" href="/" >.</a>
        <div className="login">
          <svg className="login-sides">
            <line className="top-right first" x1="50%" x2="100%" y1="0" y2="0"/>
            <line className="top-left first" x1="50%" x2="0" y1="0" y2="0"/>
            <line className="right second" x1="100%" x2="100%" y1="0" y2="100%"/>
            <line className="left second" x1="0" x2="0" y1="0" y2="100%"/> 
            <line className="bottom-left third" x1="0" x2="50%" y1="100%" y2="100%"/>
            <line className="bottom-right third" x1="100%" x2="50%" y1="100%" y2="100%"/>
          </svg>
          <fieldset className="login-fieldset">
              <InputText
                    type="email"
                    id="email"
                    name="email"
                    styleInput="login-fieldset-field"
                    placeholder="Email"
                    errorText="Please enter a valid email address"
                    value={formState.inputsValues.email}
                    onInputChange={inputChangeHandler}
                    initialValue=""
                    initiallyValid={false}
                    required
                    email
                  />
            <InputText
                type="password"
                id="password"
                name="password"
                styleInput="login-fieldset-field"
                placeholder="Password"
                errorText="must be at least 6 chars long"
                value={formState.inputsValues.password}
                onInputChange={inputChangeHandler}
                initialValue=""
                initiallyValid={false}
                required
                minLength={6}
              />
            <button type="submit" onClick={submitHandler} className="login-fieldset-submit">
              Login
            </button>
            <Link to="/signin"  className="login-fieldset-submit">
              Sign In
            </Link>
            { userError && (
                <p style={{color:"red", fontSize:13, fontStyle:'italic'}}>{userError}</p>
                )}
          </fieldset>
        </div>
      </main>
   </div>
  );
}

export default LoginContainer;
