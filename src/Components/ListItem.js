import React, {useState} from 'react'

// const ListItem = (props) => {
//     const [show, setShow]=useState(true)
//     return (
//         <div>
//         {show?(
//             <ul className='grid--container groceries-item'>
//             <span clasName='item-name'>{props.name}</span>
//             <span className='item-quantity'>{props.quantity}</span>
//             <span className='item-price'>{props.price}</span>
//             <button onClick={()=>setShow(!show)}
//             >Delete</button>
//             </ul>
//             ):''}
//             </div>
//             );
//         };
function ListItem(props) {
	return (
		<li className='grid--container groceries__item'>
			<span className='groceries__item__name'>
            <button onClick={(event) => props.handleDelete(props.groceryItem.item)}>Remove</button></span>
			<span className='groceries__item__quantity'>
				{props.groceryItem.quantity}
			</span>
			<span className='groceries__item__price'>${props.groceryItem.price}</span>
		</li>
	);
}


export default ListItem;