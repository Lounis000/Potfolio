import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectDetails } from './components/ProjectDetails';
import { FeedbacksPage } from './components/FeedbacksPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <Router>
      <FeedbackProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <Skills />
                <Projects />
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/feedbacks" element={<FeedbacksPage />} />
          </Routes>
          <Footer />
        </div>
      </FeedbackProvider>
    </Router>
  );
}

export default App;
