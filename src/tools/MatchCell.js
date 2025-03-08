import {TableCell} from "@mui/material";
import Dropdown from "./Dropdown";
import {useState} from "react";

function MatchCell(props) {
    const [outcome, setOutcome] = useState(-1);
    let colours = {0: "green", 1: "yellow", 2: "red"}
    const [style, setStyle] = useState("white");

    return (
        <TableCell component="th" scope="row" className="Table-cell">
            <div className="match-cell-outer"
                 style={{"backgroundColor": style}}
            >
                <div className="match-cell-inner">
                    <p>{props.match.hometeam}</p>
                    <p>{props.match.awayteam}</p>
                </div>

                <Dropdown label="Match Outcome"
                          value={outcome}
                          width="90px"
                          handleChange={(event) => {
                              setStyle(colours[event.target.value]);
                              setOutcome(event.target.value)
                          }}
                />
            </div>
        </TableCell>
    )
}
export default MatchCell;