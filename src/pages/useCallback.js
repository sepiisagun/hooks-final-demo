import React, { useCallback, useState } from 'react';
import List from '../components/List';

function CallBackPage({ type }) {
	const [number, setNumber] = useState(1);
	const [dark, setDark] = useState(false);

	const getItemsRegular = () => {
		return [number, number + 1, number + 2];
	};

	const getItemsCallback = useCallback(() => {
		return [number, number + 1, number + 2];
	}, [number]);

	const theme = {
		backgroundColor: dark ? '#333' : '#FFF',
		color: dark ? '#FFF' : '#333',
	};

	return (
		<div className="container" style={theme}>
			<label>{type}</label>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark((prevDark) => !prevDark)}>
				Toggle theme
			</button>
			<List
				getItems={
					type === 'Callback' ? getItemsCallback : getItemsRegular
				}
				type={type}
			/>
		</div>
	);
}

function UseCallBack() {
	return (
		<div className="container">
			<CallBackPage type="Callback" />
			<CallBackPage type="Regular" />
		</div>
	);
}

export default UseCallBack;
