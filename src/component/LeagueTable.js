import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function LeagueTable(){
    let rows = [{name:'Liverpool', mp:29, w:21, d:7, l:1, points:70 }, {name:'Arsenal', mp:29, w:21, d:7, l:1, points:70 }]

    return (
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
    )
}
export default LeagueTable;