import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { createDeck} from "../utils/api";

function CreateDeck() {

const initialState = {name:``, description:``}
const [newDeckInfo, setNewDeckInfo] = useState(initialState)

const history = useHistory();

const changeHandler = ({target}) => {
    setNewDeckInfo((currentState) => ({
        ...currentState,
        [target.name]: target.value,
    })
    )
}

const cancelHandler = () => {
    history.push("/")
}

const submitHandler = async (event) => {
    event.preventDefault();
    const response = await createDeck(newDeckInfo);
    history.push(`/decks/${response.id}`);
  }

    return (
        <div>
            <nav class="breadcrumb"><ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active">Create Deck</li>
                </ol></nav>

            <h2>Create Deck</h2>
            <form>
            <p>Name</p>
            <input name='name' id='name' type="text" placeholder="Deck Name" onChange={changeHandler}></input>
            <p class="mt-4">Description</p>
            <textarea name='description' id='description' placeholder="Brief description of the deck" rows='4' onChange={changeHandler}></textarea>
            </form>
            <button type='cancel' class="btn btn-secondary mr-4 mt-4" onClick={cancelHandler}>Cancel</button>
            <button type='submit' class="btn btn-primary mt-4" onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default CreateDeck