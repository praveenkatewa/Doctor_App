import React ,{useEffect} from 'react'
import axios from 'axios';

const HomePage = () => {
  // login user data

  const getUserData = async() => { 
    try {
      const res = await axios.get("/api/v1/users/getUserData",{},{
        headers:{
          Authorization:`Bearer + ${localStorage.getItem("token")}`
      },
    });
  }
    catch (error) {   
      Console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  },[])
  
  return (
    <div>
        <h1>home page</h1>
    </div>
  )
}

export default HomePage