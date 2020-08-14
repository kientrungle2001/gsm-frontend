import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminMenuBlockMenu (props) {
    let Menu = AdminMenuBlockMenu;
    return (
        <ul className={props.className}>
            {props.items.map(function (item, index) {
                if(item.items) {
                    let subMenuClassName = "dropdown-menu";
                    if(props.level % 2 === 1) {
                        subMenuClassName = 'dropdown-submenu';
                    }
                    return (
                    <li className="nav-item dropdown" key={"menu-item-" + index}>
                        <Link className="nav-link dropdown-toggle" to={item.path} role="button" data-toggle="dropdown">{item.name}</Link>
                        <Menu items={item.items} className={subMenuClassName} level={props.level + 1} />
                    </li>
                    );
                }
                if(props.level > 0) {
                    return (
                    <li key={"menu-item-" + index}>
                        <Link className="dropdown-item" to={item.path}>{item.name}</Link>
                    </li>
                    );
                }
                return (
                    <li className="nav-item" key={"menu-item-" + index}>
                        <Link className="nav-link" to={item.path}>{item.name}</Link>
                    </li>
                );
            })}
            {props.children}
        </ul>
    );
}