import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import Button from 'components/Button';
import Field from 'components/Field';

import './style.css';

const block = 'editing';

export default class Editing extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    onEdit: PropTypes.func,
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value || ''
    };
  }

  componentWillReceiveProps(props) {
    const value = props.value;

    if (value !== undefined) {
      this.setState({
        value
      });
    }
  }

  handleChange = value => {
    const { onChange } = this.props;

    this.setState({
      value
    });

    if (onChange === undefined) {
      return;
    }

    onChange(value);
  };

  handleSave = () => {
    const { onEdit } = this.props;

    if (onEdit === undefined) {
      return;
    }

    onEdit(this.state.value);
  };

  render() {
    const { value } = this.state;
    const { label } = this.props;

    return (
      <div className={bem({ block })}>
        <div className={bem({ block, elem: 'field' })}>
          <Field label={label} value={value} onChange={this.handleChange} autoFocus />
        </div>
        <div className={bem({ block, elem: 'action' })}>
          <Button raised icon="done" onClick={this.handleSave} />
        </div>
      </div>
    );
  }
}
