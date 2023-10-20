import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroSection from './component/HeroSection'
import GamePlaysection from './component/GamePlaysection'
import WhatCyber from './component/WhatCyber'
import CryptoStraps from './component/CryptoSection'
import TeamSection from './component/TeamSection'
import LastSection from './component/LastSection'
import Footer from './component/Footter'
import Accrdnsection from './component/AccrdnSection'

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <GamePlaysection/>
      <WhatCyber/>
      <CryptoStraps/>
      <TeamSection/>
       <Accrdnsection/>
      <LastSection/>
      <Footer/>

    </div>
  );
}

export default App;
