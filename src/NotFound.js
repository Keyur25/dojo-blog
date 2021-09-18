import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry, that page cannot be found!</h2>
            <Link to="/">Back To Home</Link>
        </div>
    );
}
 
export default NotFound;