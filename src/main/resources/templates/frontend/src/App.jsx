import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="flex-grow">
                <Dashboard />
            </main>
            <Footer />
        </div>
    );
};

export default App;
