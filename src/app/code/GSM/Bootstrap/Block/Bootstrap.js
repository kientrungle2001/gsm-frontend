import React from 'react';

function setDefaultClassName(props, className, excludes = []) {
	if (props.className) className += ' ' + (props.className || '');
	for (var key in props) {
		if (props[key] === true) {
			if(excludes.indexOf(key) === -1)
				className += ' ' + key;
		}
	}
	return className;
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

Card.Header = function (props) {
	let className = 'card-header';
	className = setDefaultClassName(props, className);
	return (
		<div className={className}>
			{props.children}
		</div>
	);
}

Card.Body = function (props) {
	let className = 'card-body';
	className = setDefaultClassName(props, className);
	return (
		<div className={className}>
			{props.children}
		</div>
	);
}

Card.Footer = function (props) {
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

Display.Flex = function (props) {
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

Text.Center = function (props) {
	let className = 'text-center';
	className = setDefaultClassName(props, className);
	return (
		<div className={className}>
			{props.children}
		</div>
	);
}

Text.Danger = function (props) {
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

Form.Group = function (props) {
	let className = 'form-group';
	className = setDefaultClassName(props, className);
	return (
		<div className={className}>
			{props.children}
		</div>
	);
}

Form.Group.Control = function(props) {
	return (
		<Form.Group>
			<Form.Control {...props} />
		</Form.Group>
	);
};

Form.Row = function (props) {
	let className = 'form-row';
	className = setDefaultClassName(props, className);
	return (
		<div className={className}>
			{props.children}
		</div>
	);
}

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

Input.Group = function (props) {
	let className = 'input-group';
	className = setDefaultClassName(props, className);
	return (
		<div className={className}>
			{props.children}
		</div>
	);
};

Input.Group.Prepend = function (props) {
	let className = 'input-group-prepend';
	className = setDefaultClassName(props, className);
	return (
		<div className={className}>
			{props.children}
		</div>
	);
};

Input.Group.Text = function (props) {
	let className = 'input-group-text';
	className = setDefaultClassName(props, className);
	return (
		<span className={className}>
			{props.children}
		</span>
	);
};

export function Btn(props) {
	let className = 'btn';
	className = setDefaultClassName(props, className);
	return (
		<button className={className}>
			{props.children}
		</button>
	);
};

Btn.Primary = function (props) {
	let className = 'btn btn-primary';
	className = setDefaultClassName(props, className);
	let extractProps = setProps(props);
	return (
		<button className={className} {...extractProps}>
			{props.children}
		</button>
	);
};

Btn.Secondary = function (props) {
	let className = 'btn btn-secondary';
	className = setDefaultClassName(props, className);
	let extractProps = setProps(props);
	return (
		<button className={className} {...extractProps}>
			{props.children}
		</button>
	);
};

Btn.Danger = function (props) {
	let className = 'btn btn-danger';
	className = setDefaultClassName(props, className);
	let extractProps = setProps(props);
	return (
		<button className={className} {...extractProps}>
			{props.children}
		</button>
	);
};

Btn.Warning = function (props) {
	let className = 'btn btn-warning';
	className = setDefaultClassName(props, className);
	return (
		<button className={className}>
			{props.children}
		</button>
	);
};

Btn.Success = function (props) {
	let className = 'btn btn-success';
	className = setDefaultClassName(props, className);
	return (
		<button className={className}>
			{props.children}
		</button>
	);
};

Col.Auto = function (props) {
	let className = 'col-auto';
	className = setDefaultClassName(props, className);
	return (
		<div className={className}>
			{props.children}
		</div>
	);
}

let colSizes = ['xl', 'lg', 'md', 'sm', 'xs'];
export function Col(props) {
	let clsNames = [];
	colSizes.forEach(function (size) {
		if (props[size]) {
			clsNames.push('col-' + size + '-' + props[size]);
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

function setProps(props, propNameList = [], defaultProps = {}) {
	let extractProps = {};
	propNameList.forEach(function (value) {
		extractProps[value] = props[value] || defaultProps[value] || null;
	});
	for(var value in props) {
		if(typeof props[value] !== 'boolean') {
			if(value !== 'className') {
				extractProps[value] = props[value];
			}
		}
	}
	return extractProps;
}

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

Modal.Content = function (props) {
	let className = 'modal-content';
	className = setDefaultClassName(props, className);
	return (
		<div className={className} >
			{props.children}
		</div>
	);
}

Modal.Header = function (props) {
	let className = 'modal-header';
	className = setDefaultClassName(props, className);
	return (
		<div className={className} >
			{props.children}
		</div>
	);
}

Modal.Title = function (props) {
	let className = 'modal-title';
	className = setDefaultClassName(props, className);
	return (
		<h5 className={className} >
			{props.children}
		</h5>
	);
}

Modal.Close = function (props) {
	return (
		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
	);
}

Modal.Body = function (props) {
	let className = 'modal-body';
	className = setDefaultClassName(props, className);
	return (
		<div className={className} >
			{props.children}
		</div>
	);
}

Modal.Footer = function (props) {
	let className = 'modal-footer';
	className = setDefaultClassName(props, className);
	return (
		<div className={className} >
			{props.children}
		</div>
	);
}

export function Pagination(props) {
	let className = 'pagination';
	let modalProps = setProps(props);
	className = setDefaultClassName(props, className);
	return (
		<ul className={className} {...modalProps} >
			{props.children}
		</ul>
	);
};

Pagination.Item = function(props) {
	let className = 'page-item';
	let modalProps = setProps(props);
	className = setDefaultClassName(props, className);
	return (
		<li className={className} {...modalProps} >
			{props.children}
		</li>
	);
};

Pagination.Item.Link = function(props) {
	let className = 'page-link';
	let modalProps = setProps(props);
	className = setDefaultClassName(props, className);
	return (
		<a className={className} {...modalProps} >
			{props.children}
		</a>
	);
};

export default {
	Container, Row, Col, Card, Display, Text, Form, Input, Btn, Modal, Pagination
};