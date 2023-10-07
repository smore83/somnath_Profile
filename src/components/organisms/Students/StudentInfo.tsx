import { Grid, Typography } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
interface student{
    id:number;
    name:string;
}
interface StudentInfoProps{
students:student[];
}

const StudentInfo:React.FC<StudentInfoProps> = ({students}) => {
  const navigate=useNavigate();
  const handleClick=(id:any)=>{
    navigate(`/student/${id}`)
    

  }
  return (
    <>
    <div>StudentInfo and List of students</div>
  
    {
        students.map((student)=>(
              <li key={student.id}>
                <Grid onClick={(e)=>{handleClick(student.id)}} >
                  <Typography children={student.name} variant="body1"/>
                </Grid>
                      {/* <Link to={`/student/${student.id}`}>{student.name}</Link> */}
              </li>
        ))
    }
    
    </>
  )
}

export default StudentInfo