import React from "react"



function Form({newCardInfo, changeHandler, cancelHandler, submitHandler}) {

    return (
        <div>
        <form>
        <p>Front</p>
        <textarea name='front' id='front' value={newCardInfo.front} rows='4' onChange={changeHandler} placeholder='Front of card'></textarea>
        <p>Back</p>
        <textarea name='back' id='back' value={newCardInfo.back} rows='4' onChange={changeHandler} placeholder='Back of card'></textarea>
        </form>
        <button type='cancel' class="btn btn-secondary mr-4 mt-4" onClick={cancelHandler}>Done</button>
        <button type='submit' class="btn btn-primary mt-4" onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Form