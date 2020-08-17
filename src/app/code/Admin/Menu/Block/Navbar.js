import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
					{props.brand_name ? <Link className="navbar-brand" to="/">{props.brand_name}</Link> : null}
          {props.children}
        </nav>
    );
}