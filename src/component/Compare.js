import Dropdown from "../tools/Dropdown";
import {useState} from "react";

function Compare() {
    const [team1, setTeam1] = useState(0);
    const [team2, setTeam2] = useState(0);

    return (
        <div>
            <div className="compare-header">
                <p className="text">Compare Teams:</p>
                <Dropdown value={team1}
                          handleChange={(event) => setTeam1(event.target.value)}
                />

                <Dropdown value={team2}
                          handleChange={(event) => setTeam2(event.target.value)}
                />
            </div>
        </div>
    )
}
export default Compare;