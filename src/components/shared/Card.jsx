import { Children } from "react";

function Card({children}) {
    return(
        <div className="card">
        {children}

        </div>
    )
}

export default Card;