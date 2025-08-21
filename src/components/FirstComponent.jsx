
import bike from "../assets/download.jpeg";

const firstComponent = () => {

    let firstVariable = "World";
    return (
        <div>
            <h1>Hello {firstVariable}</h1>
            <img src={ bike } alt="img" />
        
        </div>
    );
};

export default firstComponent;

