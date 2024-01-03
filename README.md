# Flashcard-o-matic Capstone

## Summary

This is a react application similar to Quizlet allowing users to study from decks of flashcards. Users are able to create, edit, view, study, and delete decks as well as add, edit, and delete cards from decks. This was created to practice with React and using routes, URLs, and state over multiple components.

## Technology

- JavaScript
- React
- HTML
- CSS
- Bootstrap

## Projeect Features

### Home Page

The home page of the application lists all create decks. From here the user can create a new deck to add to the list or interact with the existing decks. The existing decks will have three buttons on them, "view", "study", and "delete". Clicking the view button will take you to the individual deck, the study button will allow the user to start studying the cards in the deck, and the delete button will ask if you actually want to delete the deck before deleting.

![Home Page](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/aec44003-61ce-402d-a229-f42b2896f32c)

### View Deck

After clicking "view" from the home page on one of the decks the user is taking to another page where the specific deck is listed with all cards in it. There is a navigation bar at the top linking back to the home page. Under that is the deck name, deck description, and four more buttons. The "edit" button allows you to make changes to the deck name and description. The "study" button lets you flip through the cards in the deck. The "add cards" button allows you to add more cards to the deck. The "delete" button will confirm if you want to delete the deck. Below all of that are the cards within the deck. The left side is the front of the flashcard and the right side is the back of the card with another two buttons. The "edit" button allows you to change the specific existing card and the "delete" button lets you delete a specific card from the deck.

![View Deck](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/49e3497f-a9c6-4743-bc6b-41216b75a9cb)

### Edit Deck

The edit deck feature allows you to change the name of the deck and the description of the deck. The old information is prefilled and able to be edited. Clicking cancel takes you back to the view page and clicking submit saves your changes.

![Edit Deck](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/500f096f-70c4-4d1d-a2d8-f4e47579bc93)

### Add Card

The add card feature allows you to add a new flashcard to an existing deck. It shows the deck name you are adding to and then two boxes below to add text to the card. The first box is for what will appear on the front of the card and the second box is for the back of the card. Clicking done will take you back to the deck view and the submit button will add the card to the deck and refresh the page to two empty boxes again.

![Add Card](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/d032a5f0-b93e-4143-887c-9b00b7e528b9)

### Edit Card

The edit card feature allows you to change the text on an existing card. The navigation bar will show which number card you are editing and what deck it is part of. The existing text from the front and back of the cards will appear in their respective boxes where the user can then make changes. Clicking done will take you back to the view deck page and submit will save the changes made to the card.

![Edit Card](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/08483ec8-e985-4d3b-8b5c-34bfcfef0db8)

### Study Deck

The study feature allows you to go through each card within a deck starting with the front and thn flipping to the back when ready. At first, only the "flip" button will appear when you are on the front of the card. After flipping to the back of the card, the "next" button will allow you to move on to the next card within the deck. When you finally reach the back of the last card of the deck, clicking next will bring up a confirmation message asking "Restart deck? Click cancel to return to home page.". Clicking cancel will take you back to the home page, and clicking OK will restart the deck from card one to study again. A deck can only be studied if there are at least three cards in the deck. If study is clicked on a deck with less than three cards, you are taken to a screen that says "Not enough cards" and explains that more cards are needed. From there, you can add cards to the deck with the "add cards" button displayed.

Front:
![Study Front](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/90af02fd-e3c2-4d64-b30e-66a971709ca0)
Back:
![Study Back](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/488ee79f-9c08-4f4f-aed5-c25af54d06bd)
End:
![Study End](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/f012ca3d-39a6-4c0d-b6ed-e799ffb983a2)
Not enough:
![Study Not Enough](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/f86cbde1-9b8c-466a-829b-92280ae46956)

### Create Deck

The create deck feature can be used from the home page by clicking the "create deck" button. This allows you to create a new deck where you assign a name and description to the deck. Clicking cancel takes you back to the home page and clicking submit creates the deck and takes you to the view deck page of the new deck.

![Create Deck](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/f0ab84d8-27c3-4e7c-b5b7-aaf07abd0352)

### Delete Card

The delete card feature can be used when viewing a deck. After clicking the delete button located on the right side of each card, a confirmation message asking "Delete this card? You will not be able to recover it." is displayed. Clicking cancel removes the message and does nothing and clicking OK deletes the specific card from that deck.

![Delete Card](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/e54f5f62-27f0-49c8-b1d0-23b17553418a)

### Delete Deck

The delete deck feature can be accessed from the home page or view deck page after clicking the "delete" button. After clicking the button, a message is displayed saying "Do you really want to delete this deck?". Clicking cancel removes the message and does nothing and clicking OK deletes the deck from the application.

![Delete Deck](https://github.com/ryan-prosser/FlashCard-Capstone-Project/assets/133927475/6dc764d3-8ac4-438c-97d7-4e72693b2b4c)
