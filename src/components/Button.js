import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({btnClass, btnText, btnLink}) {
    return (
        <>
            <Link to={btnLink} className={`btn ${btnClass}`}>{btnText}</Link>
        </>
    )
}