import React from "react";
import { Link } from "react-router-dom";

function CardTeam({name, designation, thumbnail}) {
    return (
        <>  
            <article className="card-team mb-4">
                <Link to={`/team/1`} className="d-flex align-items-center">
                    <figure className="card-team__thumbnail mb-0 overflow-hidden">
                        <img src={thumbnail} className="w-100 h-100 object-fit" alt="Thumbnail"/>
                    </figure>
                    <div className="card-team__details">
                        <h3>{name}</h3>
                        <p>{designation}</p>
                    </div>
                </Link>
            </article>
        </>
    )
}

export default CardTeam;
