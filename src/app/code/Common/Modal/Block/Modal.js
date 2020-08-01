import React from 'react';
import {Modal, Btn} from 'Bootstrap/Block/Bootstrap';

class CommonModalBlockModal extends React.Component {
	render() {
		return (
			<Modal id={this.props.id}>
					<Modal.Dialog modal-xl>
						<Modal.Content>
							<Modal.Header>
								<Modal.Title>{this.props.title}</Modal.Title>
								<Modal.Close />
							</Modal.Header>
							<Modal.Body>
								{this.props.children}
							</Modal.Body>
							<Modal.Footer>
								<Btn.Primary>Save changes</Btn.Primary>
								<Btn.Secondary data-dismiss="modal">Close</Btn.Secondary>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Dialog>
				</Modal>
		);
	}
}

export default CommonModalBlockModal;