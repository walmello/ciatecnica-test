import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import Create from '../pages/create'
import { useState } from 'react'

import Sidebar from './sidebar'

export default _ => { 
  const [profile, setProfile] = useState({
    username: '',
    firstname: '',
    lastname: ''
  })

  return <>
    <div className="d-flex justify-content-between">
        <Sidebar/>
        <div className="flex-fill d-flex flex-column container">
        <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/create">
                  <Create profile={profile} setProfile={setProfile}/>
              </Route>
          </Switch>
        </BrowserRouter>
        </div>
    </div>
  </>
}