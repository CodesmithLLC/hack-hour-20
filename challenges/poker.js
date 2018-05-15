/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
	hand1.sort((a,b)=>(a-b));
	hand2.sort((a,b)=>(a-b));
	hand1 = replace(hand1);
	hand2 = replace(hand2);
	return check(hand1) > check(hand2) ? 'Player 1 wins' : 'Players 2 wins';
}

function replace(hand) {
	return hand.map(card => {
		if(card === 'Jack') return 11;
		if(card === 'Queen') return 12;
		if(card === 'King') return 13;
		if(card === 'Ace') return 14;
		return card;
	})
}

function check(hand) {
	let result = 0;
	const counter = {};
	for(let i = 0 ; i< hand.length ; i++) {
		if(counter[hand[i]]) counter[hand[i]]++;
		else counter[hand[i]] = 1;
	}
	if (Object.keys(counter).length > 3) {
		let prev = 0;
		Object.keys(counter).forEach(card => {
			card = parseInt(card);
			if(counter[card] === 2) result = 100+card;
			if(prev === 0 ) prev = card;
			else if(card - prev === 1) prev = card;
		})
		if(result > 100 ) null;
		else if(prev === hand[hand.length-1]) result= 400+hand[hand.length-1];
		else result = hand[hand.length-1];
	} else if (Object.keys(counter).length === 3 ) {
		Object.keys(counter).forEach(card => {
			card = parseInt(card);
			if(counter[card] === 3) result = 300+card;
			if(counter[card] === 2) result = 200+card;
		})
	} else {
		Object.keys(counter).forEach(card => {
			card = parseInt(card);
			if(counter[card] === 4) result = 600+card;
			if(counter[card] === 3) result = 500+card;
		})
	}
	return result;
}


module.exports = poker;
