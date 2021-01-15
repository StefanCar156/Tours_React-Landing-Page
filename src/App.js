import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';
import ToursContainer from './components/ToursContainer';
import TestimonialsContainer from './components/TestimonialsContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Submenu />
      <ToursContainer />
      <TestimonialsContainer />
    </div>
  );
}

export default App;
