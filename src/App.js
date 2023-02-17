import './App.css';
import coldBg from './assets/coldbg.jpg'
import hotBg from './assets/sunnybg.jpg'


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter your city name.."></input>
            <button>F</button>

            <div className="section section__temperature">
              <div className="icon">
                <h3>London,GB</h3>
                <img src="https://www.flaticon.com/free-icon/cloudy_1850730" alt="weatherIcon" />
                <h3>Cloudy</h3>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
