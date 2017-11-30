import React from 'react';
import PropTypes from 'prop-types';
import Editing from 'components/Editing';
import Button from 'components/Button';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'layers';

export default class Layers extends React.PureComponent {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    onClickSaveChanges: PropTypes.func.isRequired,
    hasChanges: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = value => {
    this.setState({
      value
    });
  };

  handleEdit = value => {
    this.setState({
      value: ''
    });

    if (value) {
      this.props.onAdd(value);
    }
  };

  renderActions() {
    const { value } = this.state;

    return (
      <Editing
        label="add new layer"
        value={value}
        onChange={this.handleChange}
        onEdit={this.handleEdit}
      />
    );
  }

  renderSaveChanges() {
    const { hasChanges, onClickSaveChanges } = this.props;
    const disabled = hasChanges === false;

    return (
      <Button stretch raised disabled={disabled} onClick={onClickSaveChanges}>
        Save changes
      </Button>
    );
  }
  render() {
    return (
      <div className={bem({ block })}>
        {this.props.children}
        {this.renderSaveChanges()}
        {this.renderActions()}
      </div>
    );
  }
}
