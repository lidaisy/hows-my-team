import {MenuItem, Select} from "@mui/material";

function Dropdown(props){
    // const clubsDict = {0: 'Arsenal', 1: 'Aston Villa', 2: 'Bournemouth', 3: 'Brentford', 4: 'Brighton & Hove Albion', 5: 'Chelsea', 6: 'Crystal Palace', 7: 'Everton', 8: 'Fulham', 9: 'Ipswich Town', 10: 'Leicester City', 11: 'Liverpool', 12: 'Manchester City', 13: 'Manchester United', 14: 'Newcastle United', 15: 'Nottingham Forest', 16: 'Southampton', 17: 'Tottenham Hotspur', 18: 'West Ham United', 19: 'Wolves'}

    const clubs = [
        {name: 'Arsenal', val: 0},
        {name: 'Aston Villa', val: 1},
    {name: 'Bournemouth', val: 2},
    {name: 'Brentford', val: 3},
    {name: 'Brighton & Hove Albion', val: 4},
    {name: 'Chelsea', val: 5},
    {name: 'Crystal Palace', val: 6},
    {name: 'Everton', val: 7},
    {name: 'Fulham', val: 8},
    {name: 'Ipswich Town', val: 9},
    {name: 'Leicester City', val: 10},
    {name: 'Liverpool', val: 11},
    {name: 'Manchester City', val: 12},
    {name: 'Manchester United', val: 13},
    {name: 'Newcastle United', val: 14},
    {name: 'Nottingham Forest', val: 15},
    {name: 'Southampton', val: 16},
    {name: 'Tottenham Hotspur', val: 17},
    {name: 'West Ham United', val: 18},
    {name: 'Wolves', val: 19}]

    return (
        <Select className="clubs-select"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            label="Select Club"
            onChange={props.handleChange}
        >
            {clubs.map((item) => (
                <MenuItem value={item.val} key={item.val}>{item.name}</MenuItem>
            ))}
        </Select>
    )

}
export default Dropdown;