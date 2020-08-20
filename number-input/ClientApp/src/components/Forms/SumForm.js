import React, {useState} from 'react'
import axios from 'axios'
import Form from './Form'

function SumForm() {

    const sumHandlerURL = "https://localhost:44378/api/Number/Sum"

    const [idList, setIdList] = useState("")
    const [inputError, setInputError] = useState("")
    const [result, setResult] = useState("")

    function validateForm(){

        let input = document.getElementById("input").value
        const regex = RegExp(/[^\d,]+/, "gm")
        
        if(regex.test(input)){
            setInputError("Please check your input, only comma separated numbers allowed (ex: 10,20,30)")
            setResult("")
            return false
        }

        return true
    }

    function handleIdList(idList){

        let numberObject = {
            list: idList.split(",").filter(id=> id !== "")
        }

        return numberObject
    }

    return (

        <Form description="Get the sum of database entries" inputError={inputError}
        
            onChange={(e)=>setIdList(e.target.value)} 
            onSubmit={(e)=>{ 

                e.preventDefault()
                if(validateForm()) {
                    axios.post(sumHandlerURL, handleIdList(idList))
                    .then(response => {
                        setInputError("")
                        setResult(response.data.numberInput)
                    })
                    .catch(error => {
                        console.log(error.response)
                        setResult("Error")
                    })
                }
            }}>
            
            <p id="warning">*comma separated numbers (ex: 1,2,3)</p>

            <div id="resultDiv">
                <p id="result">Result:</p>
                <p id="resultNum">{result}</p>
            </div>
        </Form>
    )
}

export default SumForm