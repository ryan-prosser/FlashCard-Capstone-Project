import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { listDecks, deleteDeck } from "../utils/api";


function StartingContainer() {

    const [decks, setDecks] = useState([])
    const [error, setError] = useState(undefined);

    useEffect(() => {

    const abortController = new AbortController();

   listDecks(abortController.signal).then(setDecks).catch(setError)

    

   return () => abortController.abort()

}, [])

const deleteHandler = (event) => {
    if (window.confirm("Do you really want to delete this deck?")) {
        deleteDeck(event.target.parentElement.parentElement.parentElement.id)
        listDecks().then(setDecks)
      }
}

const viewHandler = (event) => {
    history.push(`decks/${event.target.parentElement.parentElement.parentElement.id}`);
    };

    const studyHandler = (event) => {
        history.push(`decks/${event.target.parentElement.parentElement.parentElement.id}/study`);
        };

    const list = decks.map((deck) => (
    <li class="p-2" key={deck.id} id={deck.id}>
        <div class="border p-4">
            <h3>{deck.name}</h3>
            <p>{deck.cards.length} cards</p>
            <p>{deck.description}</p>
            <div class ="d-flex justify-content-around">
            <button class="btn btn-secondary" onClick={viewHandler}>View</button>
            <button class="btn btn-primary" onClick={studyHandler}>Study</button>
            <button class="btn btn-danger" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
        </li>
    ))

    const history = useHistory()
    const createHandler = () => {
            history.push("/decks/new")
    }

    return (
        <div>

       <button class="btn btn-secondary" onClick={createHandler}>+ Create Deck</button>
       <ul>{list}</ul>

            </div>
)
}

export default StartingContainer;