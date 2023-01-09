import './App.css';
import NavBar from './Layout';
import LandingPage from './pages/Landing';

function App() {
	return (
		<div className="flex">
			<NavBar />
			<LandingPage />
		</div>
	);
}

export default App;
