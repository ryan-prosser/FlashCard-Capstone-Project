import React, {useState, useEffect} from "react";
import { Route, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { readDeck, deleteDeck } from "../utils/api";
import ViewCards from "./ViewCards"


function Deck() {

    const [deck, setDeck] = useState([])

    const params = useParams()
    const deckId = params.deckId

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck);
      }, [deckId]);

    const history = useHistory();
    const {url} = useRouteMatch();

    const editHandler = () => {
        history.push(`${url}/edit`)
    }

    const studyHandler = () => {
        history.push(`${url}/study`)
    }

    const addCardsHandler = () => {
        history.push(`${url}/cards/new`)
    }

    const deleteHandler = () => {
        if (window.confirm("Do you really want to delete this deck?")) {
            deleteDeck(deckId)
          }
        history.push('/')
    }

    return (
        <React.Fragment>
        <div>
            <nav class="breadcrumb"><ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active">{deck.name}</li>
                </ol></nav>
            <div>
                <h4>{deck.name}</h4>
                <p>{deck.description}</p>
                <div class="d-flex justify-content-around">
                    <button class="btn btn-secondary" onClick={editHandler}>Edit</button>
                    <button class="btn btn-primary" onClick={studyHandler}>Study</button>
                    <button class="btn btn-primary" onClick={addCardsHandler}>Add Cards</button>
                    <button class="btn btn-danger" onClick={deleteHandler}>Delete</button>
                </div>
                <h3>Cards</h3>
            </div>
        </div>                
        <Route>
         <ViewCards cards={deck.cards}/>
        </Route>
        </React.Fragment>
    )
}

export default Deck;