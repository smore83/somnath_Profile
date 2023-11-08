import axios from "axios"

export const Contact_Data=async (data:{name:string,email:string,message: string;}) => {
    console.log(data);
   const res= axios.post('http://localhost:3001/contacts',data)
   return res;
}