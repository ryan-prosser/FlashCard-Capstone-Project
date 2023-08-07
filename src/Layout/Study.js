import React, {useState, useEffect} from "react";
import { useHistory, useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../utils/api";

function Study() {

    const params = useParams()
    const deckId = params.deckId
    const cardId = params.cardId

    const initialState = {deck:{name:'Loading...', cards:[]}, isFlipped: false, currentCard: 0}

    const [deckInfo, setDeckInfo] = useState(initialState)

    useEffect(() => {
        const abortController = new AbortController();
        async function getDeck() {
            const loaded = await readDeck(deckId, abortController.signal)
            setDeckInfo({...initialState,
                    deck: loaded})
        }
        getDeck()

        return () => abortController.abort();
        }, [deckId]);

const counter = (deckInfo.currentCard + 1)

const flipHandler = () => {
    setDeckInfo({...deckInfo,
                isFlipped: !deckInfo.isFlipped})
}

const history = useHistory()

const nextHandler = () => {
    if (deckInfo.currentCard === deckInfo.deck.cards.length - 1) {
        if (window.confirm("Restart deck? Click cancel to return to home page.")) {
            setDeckInfo({...deckInfo,
                    currentCard: 0,
                    isFlipped: !deckInfo.isFlipped})
            } else {
                history.push("/")
            }
    } else {
        setDeckInfo({...deckInfo,
                        currentCard: deckInfo.currentCard + 1,
                        isFlipped: !deckInfo.isFlipped})
    }

}

if (deckInfo.deck.cards.length < 3) {

    return (
        <div>
             <nav class="breadcrumb"><ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active"><a href={`/decks/${deckId}`}>{deckInfo.deck.name}</a></li>
            <li class="breadcrumb-item active">Study</li>
                </ol></nav>

            <h2>Study: {deckInfo.deck.name}</h2>
            <h3>Not enough cards.</h3>
            <p>You need at least 3 cards in a deck to study. This deck has {deckInfo.deck.cards.length} cards.</p>
            <Link to={`/decks/${deckId}/cards/new`}>
            <button class="btn btn-primary">+ Add Cards</button>
            </Link>
        </div>
    )
} else { 
    return (
        <div>
             <nav class="breadcrumb"><ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active"><a href={`/decks/${deckId}`}>{deckInfo.deck.name}</a></li>
            <li class="breadcrumb-item active">Study</li>
                </ol></nav>

            <h2>Study: {deckInfo.deck.name}</h2>
            <div class="border p-4">
                <h6>Card {counter} of {deckInfo.deck.cards.length}</h6>
                <p class="pt-2 pb-2">{!deckInfo.isFlipped ? deckInfo.deck.cards[deckInfo.currentCard].front : deckInfo.deck.cards[deckInfo.currentCard].back}</p>
                <button class="btn btn-secondary mr-4" onClick={flipHandler}>Flip</button>
                {deckInfo.isFlipped ? <button class="btn btn-primary" onClick={nextHandler}>Next</button> : <p></p>}
            </div>
        </div>
    )
}
}

export default Study