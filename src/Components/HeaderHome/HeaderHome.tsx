import { NavLink } from 'react-router-dom'

type Props = {}

const HeaderHome = (props: Props) => {
    // const number = useSelector((state: RootState) => state.number)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
            <NavLink className="navbar-brand" to={''}>Navbar</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link bg-warning text-light' : 'nav-link'} to={''}>Home <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link bg-warning text-light' : 'nav-link'} to={'login'}>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link bg-warning text-light' : 'nav-link'} to={'register'}>Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link bg-warning text-light' : 'nav-link'} to={'about'}>About</NavLink>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

export default HeaderHome