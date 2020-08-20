import React, {useState} from 'react'
import axios from 'axios'
import Form from './Form'

function DbForm() {

    const dbHandlerURL = "https://localhost:44378/api/Number"

    const [numberInput, setNumberInput] = useState({})
    const [inputError, setInputError] = useState("")
    const [success, setSuccess] = useState("")

    function validateForm(){

        let input = document.getElementById("input").value
        const regex = RegExp(/[^\d]+/, "gm")
        
        if(regex.test(input)){

            setInputError("Please check your input, only numbers allowed")
            setSuccess("")
            return false
        }

        return true
    }

    return (

        <Form description="Send number to database" inputError={inputError}
        
            onChange={(e)=>setNumberInput({numberInput: e.target.value})} 
            onSubmit={(e)=>{
            
                e.preventDefault()
                if (validateForm()){
                    axios.post(dbHandlerURL, numberInput)
                    .then(()=>{
                        document.getElementById("form").reset()
                        setInputError("")
                        setSuccess("Number successfully submitted!")
                    })
                    .catch(error => {
                        console.log(error.response)
                        setSuccess("Error submitting number")
                    })
                }
            }}>

            <p id="success">{success}</p>
        </Form>
    )
}

export default DbForm