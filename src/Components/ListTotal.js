import React, {useState} from 'react'

function ListTotal(props) {
	function calculateTotal(groceriesArray) {
        let sum = 0;
        for (let i = 0; i < groceriesArray.length; i++) {
        	sum += groceriesArray[i].price
	}
    return sum
}

	// save the return value of calculateTotal to a variable called total
	const total = calculateTotal(props.groceries);

	return (
		<p className='groceries__total  grid--container--total'>
			<span>Total: </span>
			{/* Display the total price calculated */}
			<span>${total}</span>
		</p>
	);
}


export default ListTotal;