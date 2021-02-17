import {Route, NavLink, useRouteMatch} from "react-router-dom";
import sportsData from '../data/sportsData'
import Sport from '../components/Sport'

export default function Sports () {
    let { url } = useRouteMatch()
    const links = sportsData.map(sport => (
        <li key={sport.id}><NavLink to={`${url}/${sport.id}`}>{sport.title}</NavLink></li>
    ))
    return (
    <div>
        <h2>Sports!</h2>
        <ul>{links}</ul>

        <Route path={`${url}/:id`} >
            <Sport sportsData={sportsData} />
        </Route>
    </div>
    )
}