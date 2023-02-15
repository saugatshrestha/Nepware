import React from "react";

function CardTeamDescription({name, designation, thumbnail}) {
    return (
        <>  
            <figure className="card-team__thumbnail mb-0 overflow-hidden">
                <img src={thumbnail} className="w-100 h-100 object-fit" alt="Thumbnail" />
            </figure>
            <h3>{name}</h3>
            <p>{designation}</p>
        </>
    )
}

export default CardTeamDescription;
