import './App.css';
import Header from './components/Header/Header.tsx';
import NewCollection from './components/NewCollection/NewCollection.tsx';
import PresentationBlock from './components/PresentationBlock/PresentationBlock.tsx';
import Reproductions from './components/Reproductions/Reproductions.tsx';

function App() {
  return (
    <>
      <Header/>
      <PresentationBlock/>
      <Reproductions/>
      <NewCollection/>
    </>
  );
}

export default App;
