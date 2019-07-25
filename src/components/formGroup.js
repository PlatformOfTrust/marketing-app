import React, {Component} from 'react';

import Form from 'react-bootstrap/Form';

class FormGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controlID: this.props.controlID,
            muted: this.props.muted,
            label: this.props.label,
            type: this.props.type,
            placeholder: this.props.placeholder
        };
    }

    render() {
        return (
            <Form.Group controlId={this.state.controlID}>
                <Form.Label>{this.state.label}</Form.Label>
                <Form.Control type={this.state.type} placeholder={this.state.placeholder} />
                {
                  this.state.muted !== null ? <Form.Text className="text-muted">{this.state.muted}</Form.Text> : null
                }
            </Form.Group>

        );
    }
}

export default FormGroup;
