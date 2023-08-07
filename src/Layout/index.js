import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateDeck from "./CreateDeck";
import Deck from "./Deck";
import Study from "./Study";
import EditDeck from "./EditDeck";
import EditCards from "./EditCards";
import AddCard from "./AddCard";

function Layout() {

  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/decks/new'>
          <CreateDeck />
        </Route>
        <Route exact path='/decks/:deckId'>
          <Deck />
        </Route>
        <Route exact path='/decks/:deckId/study'>
          <Study />
        </Route>
        <Route exact path='/decks/:deckId/edit'>
          <EditDeck />
        </Route>
        <Route exact path='/decks/:deckId/cards/:cardId/edit'>
          <EditCards />
        </Route>
        <Route exact path='/decks/:deckId/cards/new'>
          <AddCard />
        </Route>
        <Route>
        <NotFound />
        </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
