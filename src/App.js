// module component
// pages
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import UseContext from './pages/useContext';
import UseCallBack from './pages/useCallback';
import UseMemo from './pages/useMemo';
import UseReducer from './pages/useReducer';
import UseRef from './pages/useRef';
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
			case '/reducer':
				return <UseReducer />;
			case '/ref':
				return <UseRef />;
			case '/context':
				return <UseContext />;
			case '/memo':
				return <UseMemo />;
			case '/callback':
				return <UseCallBack />;
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
