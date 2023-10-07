import StudentDetails from "./components/organisms/Students/StudentDetails";
import StudentInfo from "./components/organisms/Students/StudentInfo";
import {Route ,Routes,Link} from 'react-router-dom';

const students = [
  { id: 1, name: 'John Doe', age: 20, grade: 'A' },
  { id: 2, name: 'Jane Smith', age: 22, grade: 'B' },
  { id: 3, name: 'Alice Johnson', age: 21, grade: 'C' },
];


function App() {
  return (
   <>
     
            <Routes>
                <Route path="/" element={<StudentInfo students={students} />} />
                 <Route path="/student/:id" element={<StudentDetails students={students} />} /> 
             </Routes>
   </> 
   
  );
}

export default App;