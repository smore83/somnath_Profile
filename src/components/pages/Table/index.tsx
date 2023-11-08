import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  Education: string,
  Institute:string,
  Grade: number,
  Cocurricular: string,
) {
  return {Education, Institute,Grade, Cocurricular };
}

const rows = [
  createData('B-Tech-CS','Vit Pune', 6.0, 'cricket'),
  createData('12th','Am College', 9.0, 'kabaddi'),
  createData('10th','MMV Alandi',  16.0, 'cricket'),
  createData('1st to 4th','ZP Alandi', 3.7, 'masa masa')
];

const  BasicTable=() =>{
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
           <TableCell>Education</TableCell>
           <TableCell>Institute</TableCell>
           <TableCell>Grade</TableCell>
           <TableCell>Co-curricular</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {

        rows.map((educationData)=>(
            <TableRow>
            <TableCell>
             {educationData.Education}
            </TableCell>
            <TableCell>
             {educationData.Institute}
            </TableCell>
            <TableCell>
             {educationData.Grade}
            </TableCell>
            <TableCell>
             {educationData.Cocurricular}
            </TableCell>
            </TableRow>
        ))
     
          }
      </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BasicTable;