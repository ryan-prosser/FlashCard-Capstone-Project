import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, createCard } from "../utils/api";

function AddCard() {

    const initialState = {id:'', front:'', back:'', deckId:''}
    const [newCardInfo, setNewCardInfo] = useState(initialState)

    const params = useParams()
    const deckId = params.deckId
    const cardId = params.cardId

    const [deck, setDeck] = useState({name:'Loading...'})

    useEffect(() => {
        const abortController = new AbortController();
        async function getDeck() {
            const loaded = await readDeck(deckId, abortController.signal)
            setDeck(loaded)
        }
        getDeck()

        return () => abortController.abort();
        }, [deckId]);

            const history = useHistory()

            const submitHandler = async (event) => {
                event.preventDefault();
                await createCard(deckId, newCardInfo);
                setNewCardInfo(initialState)
                history.go(0);
              };
        
            const cancelHandler = () => {
                history.push(`/decks/${deckId}`)
            }

            const changeHandler = ({target}) => {
                setNewCardInfo((currentState) => ({
                    ...currentState,
                    [target.name]: target.value,
                })
                )
            }

    return (
        <div>
        <nav class="breadcrumb"><ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active"><a href={`/decks/${deckId}`}>{deck.name}</a></li>
        <li class="breadcrumb-item active">Add Card</li>
            </ol></nav>
        <h2>{deck.name}: Add Card</h2>
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

export default AddCard