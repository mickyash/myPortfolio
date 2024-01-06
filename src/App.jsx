import './App.css'
import { NavBar } from './components/navbar';
import { HomePage } from './components/front_page';
import { Skills } from './components/skills'
import { Projects } from './components/project'
import { Contact } from './components/Contacts'
import { Footer } from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
