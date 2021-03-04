import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default _ => {

return <>
  <header className="c-header c-header-light px-3">
        <a className="c-header-brand">
          Navigation
        </a>
        <button className="c-header-toggler sidebar-toggler" type="button" data-toggle="sidebar-show">
          <span className="c-header-toggler-icon"></span>
        </button>
        <ul class="c-header-nav ml-auto">
          
          <li class="c-header-nav-item">
            <a class="c-header-nav-link" href="#">
              <i class="cil-home"></i>
            </a>
          </li>
          /
          <li class="c-header-nav-item">
            <a class="c-header-nav-link" href="#">
              Users
            </a>
          </li>
          /
          <BrowserRouter>
            <Switch>
              <Route path="/" exact={true}>
                <li class="c-header-nav-item">
                  <a class="c-header-nav-link" href="#">
                    List
                  </a>
                </li>
              </Route>
              <Route path="/create" exact={true}>
                <li class="c-header-nav-item">
                  <a class="c-header-nav-link" href="#">
                    Create
                  </a>
                </li>
              </Route>
            </Switch>
          </BrowserRouter>
        </ul>
      </header>
</>
}