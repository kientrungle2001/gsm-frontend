import React from 'react';

function setDefaultClassName(props, className, excludes = []) {
	if (props.className) className += ' ' + (props.className || '');
	for (var key in props) {
		if (props[key] === true) {
			if (excludes.indexOf(key) === -1)
				className += ' ' + key;
		}
	}
	return className;
}

function setProps(props, propNameList = [], defaultProps = {}) {
	let extractProps = {};
	propNameList.forEach(function (value) {
		extractProps[value] = props[value] || defaultProps[value] || null;
	});
	for (var value in props) {
		if (typeof props[value] !== 'boolean') {
			if (value !== 'className') {
				extractProps[value] = props[value];
			}
		}
	}
	return extractProps;
}

function generateElementByClassName(className, tagName = null) {
	if (null === tagName) {
		return (props) => {
			let extractProps = setProps(props);
			className = setDefaultClassName(props, className);
			return (
				<div className={className} {...extractProps} >
					{props.children}
				</div>
			);
		};
	} else {
		return (props) => {
			let extractProps = setProps(props);
			className = setDefaultClassName(props, className);
			if (tagName === 'span') {
				return (
					<span className={className} {...extractProps} >
						{props.children}
					</span>
				);
			} else if (tagName === 'ul') {
				return (
					<ul className={className} {...extractProps} >
						{props.children}
					</ul>
				);
			} else if (tagName === 'li') {
				return (
					<li className={className} {...extractProps} >
						{props.children}
					</li>
				);
			} else if (tagName === 'button') {
				return (
					<button className={className} {...extractProps} >
						{props.children}
					</button>
				);
			} else if (tagName === 'a') {
				return (
					<a className={className} {...extractProps} >
						{props.children}
					</a>
				);
			} else if (tagName === 'h5') {
				return (
					<h5 className={className} {...extractProps} >
						{props.children}
					</h5>
				);
			}

		};
	}

}

export function Container(props) {
	let className = "container";
	if (props.fluid) className += '-fluid';
	className = setDefaultClassName(props, className, ['fluid']);
	return (
		<div className={className}>
			{props.children}
		</div>
	);
}

export var Row = generateElementByClassName('row');

export var Card = generateElementByClassName('card');
Card.Header = generateElementByClassName('card-header');
Card.Body = generateElementByClassName('card-body');
Card.Footer = generateElementByClassName('card-footer');

export var Display = generateElementByClassName('d');
Display.Flex = generateElementByClassName('d-flex');

export var Text = generateElementByClassName('text');
Text.Center = generateElementByClassName('text-center');
Text.Danger = generateElementByClassName('text text-danger', 'span');

export var Form = generateElementByClassName('form');

Form.Group = generateElementByClassName('form-group');

Form.Group.Control = function (props) {
	return (
		<Form.Group>
			<Form.Control {...props} />
		</Form.Group>
	);
};

Form.Row = generateElementByClassName('form-row');

Form.Control = React.forwardRef(function (props, ref) {
	let className = 'form-control';
	className = setDefaultClassName(props, className);
	if (props.type && props.type === 'select') {
		return <select className={className} ref={ref}>
			{props.children}
		</select>
	}
	return (
		<input type={props.type || 'text'} className={className} ref={ref} placeholder={props.placeholder} />
	);
});
export var Input = React.forwardRef(function (props, ref) {
	let className = '';
	className = setDefaultClassName(props, className);
	if (props.type && props.type === 'select') {
		return <select className={className} ref={ref}>
			{props.children}
		</select>
	}
	return (
		<input type={props.type || 'text'} value={props.value} className={className} ref={ref} placeholder={props.placeholder} />
	);
});

Input.Group = generateElementByClassName('input-group');
Input.Group.Prepend = generateElementByClassName('input-group-prepend');
Input.Group.Text = generateElementByClassName('input-group-text', 'span');

export var Btn = generateElementByClassName('btn', 'button');
Btn.Primary = generateElementByClassName('btn btn-primary', 'button');
Btn.Secondary = generateElementByClassName('btn btn-secondary', 'button');
Btn.Danger = generateElementByClassName('btn btn-danger', 'button');
Btn.Warning = generateElementByClassName('btn btn-warning', 'button');
Btn.Success = generateElementByClassName('btn btn-success', 'button');


let colSizes = ['xl', 'lg', 'md', 'sm', 'xs'];
export function Col(props) {
	let clsNames = [];
	colSizes.forEach(function (size) {
		if (props[size]) {
			if (size === 'xs') {
				clsNames.push('col-' + props[size]);
			} else {
				clsNames.push('col-' + size + '-' + props[size]);
			}

		}
	});


	if (clsNames.length === 0) {
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

Col.Auto = generateElementByClassName('col-auto');

export function Modal(props) {
	let className = 'modal';
	let modalProps = setProps(props, ['tabIndex', 'role', 'id'], { tabindex: -1, role: 'dialog' });
	className = setDefaultClassName(props, className);
	return (
		<div className={className} {...modalProps} >
			{props.children}
		</div>
	);
};

Modal.Dialog = function (props) {
	let className = 'modal-dialog';
	let modalProps = setProps(props, ['role'], { role: 'document' });
	className = setDefaultClassName(props, className);
	return (
		<div className={className} {...modalProps} >
			{props.children}
		</div>
	);
}

Modal.Content = generateElementByClassName('modal-content');
Modal.Header = generateElementByClassName('modal-header');
Modal.Title = generateElementByClassName('modal-title', 'h5');

Modal.Close = function (props) {
	return (
		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
	);
}

Modal.Body = generateElementByClassName('modal-body');
Modal.Footer = generateElementByClassName('modal-footer');

export var Pagination = generateElementByClassName('pagination', 'ul');
Pagination.Item = generateElementByClassName('page-item', 'li');
Pagination.Item.Link = generateElementByClassName('page-link', 'a');

export var Navbar = generateElementByClassName('navbar', 'ul');

Navbar.Toggler = function (props) {
	let className = 'navbar-toggler';
	let modalProps = setProps(props);
	className = setDefaultClassName(props, className);
	return (
		<button className={className} type="button" data-toggle="collapse" {...modalProps} aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
	);
};

Navbar.Collapse = generateElementByClassName('collapse navbar-collapse');

export default {
	Container, Row, Col, Card, Display, Text, Form, Input, Btn, Modal, Pagination, Navbar
};