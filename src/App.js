import logo from './logo.svg';
import './App.css';
import Button from './tools/Button';
import {Table, TableContainer, TableCell, TableHead, TableRow, TableBody} from "@mui/material";

function App() {
    // 0 => table
    // 1 => matches
    // 2 => comparing
    let page = 0
  let rows = [{name:'Liverpool', mp:29, w:21, d:7, l:1, points:70 }, {name:'Liverpool', mp:29, w:21, d:7, l:1, points:70 }]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          League Predictor
        </p>

        <Button text = "League Table"
                isHeader={true}
                onClick={() => page = 0}
        />

        <Button text = "Matches" // do it by team as well
                isHeader={true}
                onClick={() => page = 1}
        />

        <Button text = "Compare"
                isHeader={true}
                onClick={() => page = 2}
        />
      </header>

      <div>
          {page === 0 ?
              <TableContainer>
                  <Table>
                      <TableHead>
                          <TableRow>
                              <TableCell>Club</TableCell>
                              <TableCell align="right">Matches Played</TableCell>
                              <TableCell align="right">Won</TableCell>
                              <TableCell align="right">Lost</TableCell>
                              <TableCell align="right">Drew</TableCell>
                              <TableCell align="right">Points</TableCell>
                          </TableRow>
                      </TableHead>

                      <TableBody>
                          {rows.map((row) => (
                              <TableRow
                                  key={row.name}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                  <TableCell component="th" scope="row">
                                      {row.name}
                                  </TableCell>
                                  <TableCell align="right">{row.mp}</TableCell>
                                  <TableCell align="right">{row.w}</TableCell>
                                  <TableCell align="right">{row.d}</TableCell>
                                  <TableCell align="right">{row.l}</TableCell>
                                  <TableCell align="right">{row.points}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>

          :
              <TableContainer>
                  <Table>
                      <TableHead>
                          <TableRow>
                              <TableCell>Club</TableCell>
                              <TableCell align="right">Matches Played</TableCell>
                              <TableCell align="right">Won</TableCell>
                              <TableCell align="right">Lost</TableCell>
                              <TableCell align="right">Drew</TableCell>
                              <TableCell align="right">Points</TableCell>
                          </TableRow>
                      </TableHead>

                      <TableBody>
                          {rows.map((row) => (
                              <TableRow
                                  key={row.name}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                  <TableCell component="th" scope="row">
                                      {row.name}
                                  </TableCell>
                                  <TableCell align="right">{row.mp}</TableCell>
                                  <TableCell align="right">{row.w}</TableCell>
                                  <TableCell align="right">{row.d}</TableCell>
                                  <TableCell align="right">{row.l}</TableCell>
                                  <TableCell align="right">{row.points}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          }


      </div>
    </div>
  );
}

export default App;
