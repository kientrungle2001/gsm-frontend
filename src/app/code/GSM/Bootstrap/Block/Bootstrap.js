import React from 'react';

function setDefaultClassName(props, className) {
	if(props.className) className += ' ' + (props.className || '');
	for(var key in props) {
		if(props[key] === true) {
			className+= ' ' + key;
		}
	}
	return className;
}

export function Container(props) {
    let className = "container";
		if (props.fluid) className += '-fluid';
		className = setDefaultClassName(props, className);
		return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export function Row(props) {
	let className = 'row';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export function Card(props) {
	let className = 'card';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

Card.Header = function(props) {
	let className = 'card-header';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

Card.Body = function(props) {
	let className = 'card-body';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

Card.Footer = function(props) {
	let className = 'card-footer';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export function Display(props) {
	let className = 'd';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

Display.Flex = function(props) {
	let className = 'd-flex';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export function Text(props) {
	let className = 'text';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

Text.Center = function(props) {
	let className = 'text-center';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

Text.Danger = function(props) {
	let className = 'text text-danger';
	className = setDefaultClassName(props, className);
    return (
        <span className={className}>
            {props.children}
        </span>
    );
}

export function Form(props) {
	let className = 'form';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

Form.Group = function(props) {
	let className = 'form-group';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

Form.Control = React.forwardRef(function(props, ref) {
	let className = 'form-control';
	className = setDefaultClassName(props, className);
	if(props.type && props.type == 'select') {
		return <select className={className} ref={ref}>
			{props.children}
		</select>
	}
	return (
			<input type={props.type || 'text'} className={className} ref={ref} placeholder={props.placeholder} />
	);
});
var Input = React.forwardRef(function(props, ref) {
	let className = '';
	className = setDefaultClassName(props, className);
	if(props.type && props.type == 'select') {
		return <select className={className} ref={ref}>
			{props.children}
		</select>
	}
	return (
			<input type={props.type || 'text'} value={props.value} className={className} ref={ref} placeholder={props.placeholder} />
	);
});
export var Input;

Input.Group = function(props) {
	let className = 'input-group';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
};

Input.Group.Prepend = function(props) {
	let className = 'input-group-prepend';
	className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
};

Input.Group.Text = function(props) {
	let className = 'input-group-text';
	className = setDefaultClassName(props, className);
    return (
        <span className={className}>
            {props.children}
        </span>
    );
};

let colSizes = ['xl', 'lg', 'md', 'sm', 'xs'];
export function Col(props) {
    let clsNames = [];
    colSizes.forEach(function(size) {
        if(props[size]) {
            clsNames.push('col-'+size+'-' + props[size]);
        }
    });
    
    
    if(clsNames.length === 0) {
        clsNames.push('col');
		}
		let className = clsNames.join(' ');
		className = setDefaultClassName(props, className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default {
    Container, Row, Col, Card, Display, Text, Form, Input
};