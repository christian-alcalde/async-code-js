"use strict";

const $cardButton = $("#card-btn");
const $results = $("#results");
let deckId;

async function getCard(deck_id="new") {
    let deck = await axios(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
    let $div = $(`<img src = ${deck.data.cards[0].image}>`);
    $results.append($div);
    return deck.data.deck_id;
}
  
async function getDeckId() {
    let newDeck = await axios("http://deckofcardsapi.com/api/deck/new/shuffle");
    deckId = newDeck.data.deck_id;
}


getDeckId();

$cardButton.on("click", async(evt) => {
    evt.preventDefault();
    console.log("line 24",deckId);
    getCard(deckId);

});


//run it once get a deck id
// then from the 2nd time you use that deck id
