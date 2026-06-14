import { useFormStatus } from 'react-dom';
import './App.css';
import {Users} from './components/Users/Users';
import { useState, useEffect } from 'react';

function App(){

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [isInvites, setInvites] = useState([])
  const onChangeSearchValue=(event) =>{
      setSearchValue(event.target.value);
    }
  const onClickInvites=(id)=>{
    console.log(id)
  }


  useEffect(() => {
    try{
        fetch('https://reqres.in/api/users', {
          headers: {
            'x-api-key': 'reqres_d20e984ba6ed41b887232b6feeadadb1'
          }
        })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          console.log(json.data)
          setUsers(json.data);
        })
        .catch((err) => {
          console.log(err); 
        })
      }
      finally{
        setIsLoading(false)
      }
    }, []);
    
  return(
    <div className='App'> 
      <Users items={users}
        isLoading={isLoading}
        searchValue={searchValue}
        onChangeValue={onChangeSearchValue}
        isInvites={isInvites}
        onClickInvites={onClickInvites}   
        />
    </div>
  );


}

export default App;