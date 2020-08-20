import React from 'react'
import './Form.css'

function Form(props) {

    return (

        <div id="appDiv">
            
            <div id="description">
                <h2>Insert numbers</h2>
                <p>{props.description}</p>
            </div>

            <div id="formDiv">

                <form id="form" onChange={props.onChange} onSubmit={props.onSubmit}>
                    <input type="text" id="input" required/>
                    <button type="submit" id="submit">SUBMIT</button>
                </form>
            </div>

            <p id="inputError">{props.inputError}</p>

            {props.children}
        </div>
    )
}

export default Form