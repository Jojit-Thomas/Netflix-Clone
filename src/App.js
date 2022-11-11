import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { action, family_entertainment, netfilx_orginals, top_rated, top_show, upcoming_movie } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={netfilx_orginals} title="Netflix Orginals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={family_entertainment} title="Family Entertainments" isSmall />
      <RowPost url={top_rated} title="Top Rated" isSmall />
      <RowPost url={top_show} title="Top Shows" isSmall />
      <RowPost url={upcoming_movie} title="Upcoming Movies" isSmall />
      
    </div>
  );
}

export default App;
