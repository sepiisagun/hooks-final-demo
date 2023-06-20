import { useContext } from 'react';
import { MainContext } from '../pages/useContext';

function ContextChild2() {
	const darkTheme = useContext(MainContext);
	const themeStyles = {
		backgroundColor: darkTheme ? 'black' : 'white',
		color: darkTheme ? 'white' : 'black',
	};
	return (
		<div class="card" style={themeStyles}>
			<div class="card-body fw-medium">Child Component 2</div>
		</div>
	);
}

export default ContextChild2;
