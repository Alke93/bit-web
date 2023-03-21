import { useParams } from "react-router-dom";
import Header from "./Header";

const Contact = (props) => {
    let contactText = "Ovo je poslato iz Contact komponente";
    const { name } = useParams();
    //props.params.[name]
    return (
        <div>
            <h1>Contact Me</h1>
            <h1>{name}</h1>
            <Header sentText={contactText}></Header>
        </div>
    )
};

export default Contact;