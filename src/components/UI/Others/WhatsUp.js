import React, {useReducer, useCallback, useState}  from 'react'
import InputText from "../InputText";
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


export default function WhatsUp(props) {
    const [setEmpty, setSetEmpty] = useState(false)
    const [formState, dispatchFromState] = useReducer(formReducer, {
        inputsValues: {
            tweet_text: ""
        },
        inputsValidities: {
            tweet_text: false,
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
        props.onTweet(
            formState.inputsValues.tweet_text,
          )
        console.log('Is a  valid form'); return;

      };

    return (
        <div className="row justify-content-md-center  border-top-0 pl-0 box-post"> 
            <div className="float-left mt-0 ml-0 image-profile-circle ml-0">
            
                <img src={props.userimg}  className="rounded-circle profile-home" alt="profile Home"/>
            </div>
            <div className="what-is-news"> 
            <div className="content-post-div">
            <InputText
                    setEmpty ={setEmpty}
                    type="textarea"
                    id="tweet_text"
                    name="tweet_text"
                    styleInput=""
                    placeholder="Quoi de neuf?"
                    errorText="Please say anything.."
                    value={formState.inputsValues.tweetText}
                    onInputChange={inputChangeHandler}
                    initialValue=""
                    style={{border:'none', backgroundColor:'transparent', resize:'none', outline:'none'}}
                    initiallyValid={false}
                    required
                  />
            </div>
                
                <img src="images/icons/images.svg" className="ml-1 mr-1 home-icons"  alt=""  />
                <img src="images/icons/gif.svg" className="ml-1 mr-1 home-icons"  alt=""  />
                <img src="images/icons/quotion.svg" className="ml-1 mr-1 home-icons" alt=""   />
                <img src="images/icons/emo.svg" className="ml-1 mr-1 home-icons" alt=""  />
                <img src="images/icons/calandar.svg" className="ml-1 mr-1 home-icons" alt=""  />
                <button onClick={submitHandler}
                     type="button" 
                     className="btn btn-primary float-right disabled mr-1 mb-1 ">Tweeter</button>
            </div>
        </div>
    )
}
