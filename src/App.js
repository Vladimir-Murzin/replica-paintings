import './App.css';
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import NewCollection from './components/NewCollection/NewCollection.tsx';
import PresentationBlock from './components/PresentationBlock/PresentationBlock.tsx';
import Reproductions from './components/Reproductions/Reproductions.tsx';
import TeamDescription from './components/TeamDescription/TeamDescription.tsx';

function App() {
  return (
    <>
      <Header/>
      <PresentationBlock/>
      <Reproductions/>
      <NewCollection/>
      <TeamDescription />
      <Footer />
    </>
  );
}

export default App;
