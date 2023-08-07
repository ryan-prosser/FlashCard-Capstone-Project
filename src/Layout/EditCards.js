import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, readCard, updateCard } from "../utils/api";

function EditCards() {

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

        useEffect(() => {
            const abortController = new AbortController();
            async function getCard() {
                const loaded = await readCard(cardId, abortController.signal)
                setNewCardInfo(loaded)
            }
            getCard()
    
            return () => abortController.abort();
            }, [cardId]);

            const history = useHistory()

            const submitHandler = async (event) => {
                event.preventDefault();
                const response = await updateCard(newCardInfo);
                history.push(`/decks/${deckId}`);
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
        <li class="breadcrumb-item active">Edit Card {cardId}</li>
            </ol></nav>
        <h2>Edit Card</h2>
        <form>
        <p>Front</p>
        <textarea name='front' id='front' value={newCardInfo.front} rows='4' onChange={changeHandler}></textarea>
        <p>Back</p>
        <textarea name='back' id='back' value={newCardInfo.back} rows='4' onChange={changeHandler}></textarea>
        </form>
        <button type='cancel' class="btn btn-secondary mr-4 mt-4" onClick={cancelHandler}>Cancel</button>
        <button type='submit' class="btn btn-primary mt-4" onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default EditCards