import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, updateDeck } from "../utils/api";

function EditDeck() {

    const initialState = {name:``, description:``}
    const [newDeckInfo, setNewDeckInfo] = useState(initialState)

    const params = useParams()
    const deckId = params.deckId

    useEffect(() => {
        const abortController = new AbortController();
        async function getDeck() {
            const loaded = await readDeck(deckId, abortController.signal)
            setNewDeckInfo(loaded)
        }
        getDeck()

        return () => abortController.abort();
        }, [deckId]);

    const changeHandler = ({target}) => {
        setNewDeckInfo((currentState) => ({
            ...currentState,
            [target.name]: target.value,
        })
        )
    }

    const history = useHistory()

    const submitHandler = async (event) => {
        event.preventDefault();
        const response = await updateDeck(newDeckInfo);
        history.push(`/decks/${response.id}`);
      };

    const cancelHandler = () => {
        history.push(`/decks/${deckId}`)
    }

    return (
        <div>
            <nav class="breadcrumb"><ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active"><a href={`/decks/${deckId}`}>{newDeckInfo.name}</a></li>
            <li class="breadcrumb-item active">Edit Deck</li>
                </ol></nav>
            <h2>Edit Deck</h2>
            <form>
            <p>Name</p>
            <input name='name' id='name' type="text" value={newDeckInfo.name} onChange={changeHandler}></input>
            <p class="mt-4">Description</p>
            <textarea name='description' id='description' value={newDeckInfo.description} rows='4' onChange={changeHandler}></textarea>
            </form>
            <button type='cancel' class="btn btn-secondary mr-4 mt-4" onClick={cancelHandler}>Cancel</button>
            <button type='submit' class="btn btn-primary mt-4" onClick={submitHandler}>Submit</button>

        </div>
    )
}

export default EditDeck