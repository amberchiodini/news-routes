import {Route, NavLink, useRouteMatch} from "react-router-dom";

export default function Sports () {
    let { url } = useRouteMatch()
    console.log('match', url)
    return (
    <div>
        <h2>Sports!</h2>
        <li><NavLink to={`${url}/football`}>Football</NavLink></li>
        <li><NavLink to={`${url}/soccer`}>Soccer</NavLink></li>
        <li><NavLink to={`${url}/baseball`}>Baseball</NavLink></li>

        <Route path={`${url}/football`} >
            <Football />
        </Route>

        <Route path={`${url}/soccer`} >
            <Soccer />
        </Route>

        <Route path={`${url}/baseball`} >
            <Baseball />
        </Route>

    </div>
    )
}

function Football(){
    return (
      <div>
        <h2>Football</h2>
      </div>
    )
  }
  
  function Soccer(){
    return (
      <div>
        <h2>Soccer</h2>
      </div>
    )
  }
  
  function Baseball(){
    return (
      <div>
        <h2>Baseball</h2>
      </div>
    )
  }
  
  //