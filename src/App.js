// module component
// pages
import Homepage from './pages/Homepage';
import UseSate from './pages/useState';
import UseEffect from './pages/useEffect';

function App() {
	const page = window.location.pathname;
	const renderPage = () => {
		switch (page) {
			case '/state':
				return <UseSate />;
			case '/effect':
				return <UseEffect />;
			default:
				return <Homepage />;
		}
	};
	return <div className="App">{renderPage()}</div>;
}

export default App;
