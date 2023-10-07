import { Button } from '@mui/material';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

interface Student{
    id:number;
    name:string;
    age:number;
    grade:string;
}

const StudentDetails:React.FC<{students:Student[]}> = ({students}) => {
  const navigate = useNavigate(); 
    const { id } = useParams<{id:any}>(); // Specify the type of id as a string
    console.log("harry", id);
    console.log("---------------------------");
    console.log(students);
    const student = students.find((s) => s.id === parseInt(id, 10));
    

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <>
    <div>
      <h2>Student Information</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </div>
    <Button onClick={()=>navigate(-1)} variant='contained' children="Back"/>
    </>
  );
}

export default StudentDetails