import React from 'react';
import { useRouteError } from "react-router-dom";

export default function Errorpage() {
    const error = useRouteError();
    return (
        <div>
            <div id="error-page">
                <h1>Something Went Wrong !</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}
