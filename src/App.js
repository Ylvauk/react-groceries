import logo from './logo.svg';
import './App.css';
import ListItem from './Components/ListItem.js';
import ListTotal from './Components/ListTotal.js';
import { useState } from 'react';
function App() {
	const groceriesData = [
		{
			item: 'Flour',
			brand: 'Golden Start',
			price: 12,
			quantity: '1lb',
			isPurchased: false,
		},
		{
			item: 'Salt',
			brand: 'Diamond',
			price: 2,
			quantity: '1lb',
			isPurchased: false,
		},
		{
			item: 'Eggs',
			brand: 'Maple Orchards',
			price: 3,
			quantity: '1dz',
			isPurchased: false,
		},
		{
			item: 'Milk',
			brand: 'Horizon Organic',
			price: 4,
			quantity: '1gal',
			isPurchased: false,
		},
		{
			item: 'Butter',
			brand: 'Tillamook',
			price: 2,
			quantity: '1',
			isPurchased: true,
		},
	];
	const [groceries, setGroceries] = useState(groceriesData);
	function handleDelete(itemName) {
		const updatedItems = groceries.filter(
			(grocery) => grocery.item !== itemName
		);
		setGroceries(updatedItems);
	}
	return (
		<div className='groceries'>
			<h1 className='groceries_title'>My Groceries</h1>
			<div className='groceries_content'>
			<ul className='groceries_list'>
	{groceries
		.filter((element) => element.isPurchased === false)
		.map((element, index) => {
			return <ListItem groceryItem={element} key={index} handleDelete={handleDelete} />;
		})}
	<ListTotal groceries={groceries} />
</ul>
</div>
		</div>
	);
}

export default App;
