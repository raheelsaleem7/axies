import './_App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import LiveAuction from './Components/LiveAuction/Auction/LiveAuction';
import TopSeller from './Components/TopSeller/TopSeller';
import AllMain from './Components/TodayPick/AllMain/AllMain';
import PopularCollection from './Components/PopularCollection/ForCollection/PopularCollection';
import CreateSell from './Components/CreateOrSell/CreateSell';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
     <Header />
     <Main />
     <LiveAuction />
     <TopSeller />
     <AllMain />
     <PopularCollection />
     <CreateSell />
     <Footer />
    </div>
  );
}

export default App;
