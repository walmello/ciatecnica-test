import React from 'react';
import Header from './components/header';
import Main from './components/main';

/*
function App() {
/*
  const setUser = (index, newUser) => {
    let updated = users
    updated[index] = newUser
    
    console.log(updated)
    setUsers([...updated])
  }
  const saveUser = _ => {
    setUser(editUser.index, {
      name: editUser.name,
      user: editUser.user,
      profile: editUser.profile,
      status: editUser.status
    })
  }

  const setStatus = (index, status) => {
    let updated = users
    updated[index].status = status
    
    console.log(updated)
    setUsers([...updated])
  }

  const filter = (item) => {
    console.log(item)
    if(search == 'Active'){
      return item.status == true
    }
    if(search == 'Inactive'){
      return item.status == false
    }
    return true
  }

  return (
    <Provider>
      <div className="App">
        <div className="px-3">
          <h1>Project Name</h1>
        </div>
        <Header/>
        <div className="d-flex justify-content-between">
          <Sidebar/>
          <div className="flex-fill d-flex flex-column container">
            <Route path="/">
              <Home/>
            </Route>
          </div>
        </div>
      </div>
    </Provider>
  );
}
*/


const Title = _ => <>
  <div className="px-3">
      <h1>Project Name</h1>
  </div>
</>

export default _ => { 

  return <> 
    <div className="App">
      <Title/>
      <Header/>
      <Main/>
    </div>
  </>
}