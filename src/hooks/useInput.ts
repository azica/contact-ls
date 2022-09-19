import React from 'react';
import { useState, useEffect } from "react";

export const useValidation =(value: string, validations:any)=> {

    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [validInput, setValidInput] = useState(false)

    useEffect(()=> {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength': 
                    value.length < validations[validation]? setMinLengthError(true): setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isEmail': 
                    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    emailRegex.test(String(value).toLowerCase())? setEmailError(false): setEmailError(true) 
                    break;
                case 'isPhone':
                        const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
                        phoneRegex.test(String(value).toLowerCase())? setPhoneError(false): setPhoneError(true)
                    break;

            
            }
        }

    }, [value])

    useEffect(()=> {
        if(isEmpty || phoneError || emailError || minLengthError ) {
            setValidInput(false)
        } else {
            setValidInput(true)
        }

    }, [isEmpty, phoneError, emailError, minLengthError])

    return {
        isEmpty,
        emailError,
        minLengthError,
        phoneError,
        validInput
    }
}

export const useInput = (initialValue:string, validations: any) => {

    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)

    const valid = useValidation(value, validations)

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>)=> {
        setDirty(true)
    } 

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }

}

