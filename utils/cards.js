
// creates a deck
module.exports = {
    Card: class {
        newCard(shade, type, number)
        {
            color = shade;
            suit = type;
            value = number;
        }
    },

    // creates a normal deck (no jokers)
    new_deck: function ()
    {
        // array of possible colors
        const colors = ["red", "black"];

        // arrays of possible suits seperated by colors
        const redSuits = ["diamonds", "hearts"];
        const blackSuits = ["spades", "clubs"];
        
        // initalizes an empty deck array
        let deck = [];

        // runs twice for both colors
        for(color = 0; color < 2; color++)
        {
            // runs twice for both suits of a color
            for(suit = 0; suit < 2; suit++)
            {
                // runs 13 times to make all cards of a specific color and suit
                for(value = 0; value < 13; value++)
                {
                    deck.push(new Card(colors[color], color > 0 ? redSuits[suit] : blackSuits[suit], value));
                }
            }
        }
        return deck;
    },

    // shows the deck in the terminal
    print_cards: function(cards) 
    {
        cards.forEach(card => 
            {
                console.log(card.color);
                console.log(card.suit);
                console.log(card.value);
            });
    }
}