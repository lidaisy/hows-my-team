import logo from './logo.svg';
import './App.css';
import Button from './tools/Button';
import LeagueTable from "./component/LeagueTable";
import Matches from "./component/Matches";
import Compare from "./component/Compare";
import {useState} from "react";

function App() {
    // 0 => table
    // 1 => matches
    // 2 => comparing
    const [page, setPage] = useState(0);
  let rows = [{name:'Liverpool', mp:29, w:21, d:7, l:1, points:70 }, {name:'Liverpool', mp:29, w:21, d:7, l:1, points:70 }]

  return (
    <div className="App">
      <header className="App-header-container">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                  League Predictor
              </p>

              <Button color={page === 0 ? 'green' : null}
                      text = "League Table"
                      isHeader={true}
                      onClick={() => {
                          console.log("clicked 0");
                          setPage(0)
                      }}
              />

              <Button color={page === 1 ? 'green' : null}
                      text = "Matches" // do it by team as well
                      isHeader={true}
                      onClick={() => setPage(1)}
              />

              <Button color={page === 2 ? 'green' : null}
                      text = "Compare Teams"
                      isHeader={true}
                      onClick={() => setPage(2)}
              />
          </div>
      </header>

      <div className="App-content-container">
          {page === 0 ?
              <LeagueTable/>
          :
              <Compare/>
          }
      </div>
    </div>
  );
}

export default App;
