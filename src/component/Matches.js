import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function Matches(){
    let matches = [{hometeam:'Liverpool', awayteam:'Fulham'}]
    let team = null

    return (
        <div>
            <p>Matches</p>

            <TableContainer>
                <Table>
                    <TableBody>
                        {matches.map((match) => (
                            <TableRow
                                key={match.hometeam+match.awayteam}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{match.hometeam}</TableCell>
                                <TableCell align="right">{match.awayteam}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>


    )
}
export default Matches;