import React from 'react';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';
import { deleteCard } from '../utils/api';

function ViewCards({ cards = [] }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  const deleteHandler = async (cardId) => {
    const response = window.confirm(
      'Delete this card? You will not be able to recover it.'
    );
    if (response) {
      await deleteCard(cardId);
      history.go(0);
    }
  };

  const styledCards = cards.map((card, index) => (
    <div key={index} className='card'>
      <div class='card-body'>
        <div class='row d-flex justify-content-between'>
          <div class='col-5'>{card.front}</div>
          <div class='col-5'>
            {card.back}
            <div>
              <Link to={`${url}/cards/${card.id}/edit`}>
                <button class='btn btn-secondary m-3'>
                Edit
                </button>
              </Link>
              <button className='btn btn-danger m-3' onClick={() => deleteHandler(card.id)}>
                 Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <React.Fragment>
      {styledCards}
    </React.Fragment>
  );
}

export default ViewCards;