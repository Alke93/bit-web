import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Blogs = () => {
    const navigate = useNavigate();
    const navigateToHomePage = () => {
        navigate('/');
    }

    return (
      <div>
        <h1>Blog Articles</h1>
        <Header sentText={"Ovo je poslato iz Blog komponente"}></Header>
        <button onClick={navigateToHomePage}>Go home</button>
      </div>
    )
  };
  
  export default Blogs;