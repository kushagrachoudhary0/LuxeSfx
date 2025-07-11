import Footer from './home/Footers';
import LowerSection from './home/section';
import LuxeSFX from './home/LuxeSfx';
import Eventsetion from './home/Gallery';
import Animations from './home/Animation';
function App() {
  return (
    <div className="App">
        <LuxeSFX />
        
        <Eventsetion/>
        <LowerSection />
        <Footer />
    </div>
  );
}

export default App;
