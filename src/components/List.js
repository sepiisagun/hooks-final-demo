import React, { useEffect, useState } from 'react';

function List({ getItems, type }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems());
    	console.log(`Fetching items using ${type}`);
	}, [getItems, type]);
	return items.filter((value) => !Number.isNaN(value)).map((item) => <div key={item}>{item}</div>);
}

export default List;
