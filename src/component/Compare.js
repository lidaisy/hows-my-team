import Dropdown from "../tools/Dropdown";
import {useState} from "react";
import {Table, TableBody, TableContainer, TableRow} from "@mui/material";
import MatchCell from "../tools/MatchCell";

function Compare() {
    const [team1, setTeam1] = useState(0);
    const [team2, setTeam2] = useState(0);
    const [matches, setMatches] = useState([
        {matchday: 1, matches: [{hometeam:'Liverpool', awayteam:'Fulham'}, {hometeam:'Arsenal', awayteam:'Fulham'}]},
        {matchday: 2, matches: [{hometeam:'Liverpool', awayteam:'Leicester City'}, {hometeam:'Arsenal', awayteam:'Everton'}]}])

    return (
        <div className="League-component-container">
            <div className="compare-header">
                <p className="text">Compare Teams:</p>
                <Dropdown value={team1}
                          label="Select Team"
                          isClubs={true}
                          handleChange={(event) => setTeam1(event.target.value)}
                />

                <Dropdown value={team2}
                          label="Select Team"
                          isClubs={true}
                          handleChange={(event) => setTeam2(event.target.value)}
                />
            </div>

            <div>
                <p className="text">Points:</p>
            </div>

            <TableContainer>
                <Table>
                    <TableBody>
                        {matches.map((match) => (
                            <TableRow
                                key={match.matchday}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <MatchCell match={match.matches[0]}/>
                                <MatchCell match={match.matches[1]}/>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Compare;