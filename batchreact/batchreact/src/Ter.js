import React ,{ useState  } from 'react'

const Greeting =({ isUserLoggedIn}) =>(
    <div>
        {isUserLoggedIn ? (
                <h2>Welcome</h2>
            ):(
                <h2>login again</h2>
            )
        }
    </div>
)
const Ter=()=> {
    const[userLoggedIn ,setUserLoggedIn] = useState(false);
  return (
    <div>
        <Greeting isUserLoggedIn={userLoggedIn}/>
        <button onClick={()=>
        setUserLoggedIn(!userLoggedIn)}>
            Login</button>
    </div>
  );
};
export default Ter;
