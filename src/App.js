// module component
// pages
import Homepage from './pages/Homepage';
import UseSate from './pages/useState';

function App() {
  const page = window.location.pathname;
  const renderPage = () => {
    switch (page) {
      case '/state':
        return <UseSate />;
      default:
        return <Homepage />;
    }
  }
  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
