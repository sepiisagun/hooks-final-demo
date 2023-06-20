// module component
// pages
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import UseReducer from './pages/useReducer';
import UseSate from './pages/useState';

function App() {
	const page = window.location.pathname;
	const renderPage = () => {
		switch (page) {
			case '/state':
				return <UseSate />;
			case '/reducer':
				return <UseReducer />;
			default:
				return <Homepage />;
		}
	};
	return (
		<>
			<NavBar />
			<div className="App">{renderPage()}</div>
		</>
	);
}

export default App;
