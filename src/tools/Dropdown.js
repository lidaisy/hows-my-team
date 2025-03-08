import {MenuItem, Select} from "@mui/material";

function Dropdown(props){
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

    const outcomes = [{name: 'Win', val: 0}, {name: 'Draw', val: 1}, {name: 'Lose', val: 2}]

    return (
        <Select className="clubs-select"
                style={props.width ? {width: props.width} : {}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            label={props.label}
            onChange={props.handleChange}
        >
            {(props.isClubs ? clubs : outcomes).map((item) => (
                <MenuItem value={item.val} key={item.val}>{item.name}</MenuItem>
            ))}
        </Select>
    )

}
export default Dropdown;