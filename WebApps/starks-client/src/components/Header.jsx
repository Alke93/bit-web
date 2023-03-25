import { Link } from "react-router-dom"

export const Header = () => {
    return <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
            <Link to='/home' className="nav-link">
                Home
            </Link>
        </div>
        <div className="navbar-nav mr-auto">
            <Link to='/add-course' className="nav-link">
                Add Course
            </Link>
        </div>
        <div className="navbar-nav mr-auto">
            <Link to='/add-student' className="nav-link">
                Add Student
            </Link>
        </div>
    </nav>
}