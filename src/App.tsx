import './App.css';
import NavBar from './Layout';
import Footer from './Layout/Footer';
import LandingPage from './pages/Landing';

function App() {
	return (
		<div className="flex flex-col h-screen">
			<LandingPage />
			<Footer />
		</div>
	);
}

export default App;
