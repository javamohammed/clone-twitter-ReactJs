import React, {useReducer, useCallback} from 'react';
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/actions/user";
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


function RegisterContainer() {
  const dispatch = useDispatch()
  const userError = useSelector( state => state.user.error)
  const [formState, dispatchFromState] = useReducer(formReducer, {
    inputsValues: {
      email: "",
      name:"",
      password: "",
      confirm_password: ""
    },
    inputsValidities: {
      email: false,
      name: false,
      password: false,
      confirm_password: false
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
      signIn(
        formState.inputsValues.email,
        formState.inputsValues.name,
        formState.inputsValues.password
      )
    );
    console.log('Is a  valid form'); //return;
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
                    type="text"
                    id="name"
                    name="name"
                    styleInput="login-fieldset-field"
                    placeholder="Name"
                    errorText="The name is required"
                    value={formState.inputsValues.name}
                    onInputChange={inputChangeHandler}
                    initialValue=""
                    initiallyValid={false}
                    required
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
                minLength={8}
              />
              <InputText
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  styleInput="login-fieldset-field"
                  placeholder="Confirm Password"
                  errorText="Please, Enter the same password above"
                  value={formState.inputsValues.confirm_password}
                  onInputChange={inputChangeHandler}
                  initialValue=""
                  initiallyValid={false}
                  required
                  confirmPassword={formState.inputsValues.password}
                  minLength={8}
                  />
            <button type="submit" onClick={submitHandler} className="login-fieldset-submit">
              Sign In
            </button>
            <Link to="/login" className="login-fieldset-submit">
              Login
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

export default RegisterContainer;
