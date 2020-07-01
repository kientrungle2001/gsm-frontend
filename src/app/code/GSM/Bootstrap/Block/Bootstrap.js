import React from 'react';

export function Container(props) {
    let className = "container";
    if (props.fluid) className += '-fluid';
    if(props.className) className += ' ' + props.className;
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export function Row(props) {
    return (
        <div className="row">
            {props.children}
        </div>
    );
}

let colSizes = ['xl', 'lg', 'md', 'sm', 'xs'];
export function Col(props) {
    let clsNames = [];
    colSizes.forEach(function(size) {
        if(props[size]) {
            clsNames.push('col-xl-' + props[size]);
        }
    });
    
    
    if(clsNames.length === 0) {
        clsNames.push('col');
    }
    return (
        <div className={clsNames.join(' ')}>
            {props.children}
        </div>
    );
}

export default {
    Container, Row, Col
};