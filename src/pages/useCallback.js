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
			<h6>Uses {type} Function</h6>
			<div className="container">
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
		</div>
	);
}

function UseCallBack() {
	return (
		<div className="container">
			<div className="card">
				<div className="card-body">
					<h1>useEffect Demo</h1>
					<div className="row">
						<div className="col">
							<div className="card">
								<div className="card-body">
									<CallBackPage type="Callback" />
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<div className="card-body">
									<CallBackPage type="Regular" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UseCallBack;
