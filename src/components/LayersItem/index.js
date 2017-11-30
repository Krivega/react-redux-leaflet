import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import Button from 'components/Button';
import Editing from 'components/Editing';
import Icon from 'components/Icon';

import './style.css';

const block = 'layers-item';

export default class LayersItem extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      edited: false
    };
  }

  handleEditStart = value => {
    this.setState({ edited: true });
  };

  handleEditStart = value => {
    this.setState({ edited: true });
  };

  handleEditEnd = value => {
    this.setState({ edited: false });

    if (value) {
      this.props.onChangeName(value);
    }
  };

  getBemMods() {
    return {
      active: !!this.props.active
    };
  }

  renderActions() {
    return (
      <div className={bem({ block, elem: 'actions' })}>
        <div className={bem({ block, elem: 'actions__item' })}>
          <Button icon="edit" onClick={this.handleEditStart} />
        </div>
        <div className={bem({ block, elem: 'actions__item' })}>
          <Button icon="delete_forever" onClick={this.props.onClickRemove} />
        </div>
      </div>
    );
  }

  renderContent() {
    const { name } = this.props;

    return (
      <div className={bem({ block, elem: 'content' })} onClick={this.props.onClick}>
        {name}
      </div>
    );
  }

  renderIcon() {
    const { active } = this.props;
    let icon = 'layers_clear';

    if (active) {
      icon = 'layers';
    }

    return (
      <div className={bem({ block, elem: 'icon' })} onClick={this.props.onClick}>
        <Icon small name={icon} />
      </div>
    );
  }

  renderEditing() {
    const { name } = this.props;

    return <Editing value={name} onEdit={this.handleEditEnd} />;
  }

  render() {
    const { edited } = this.state;

    return (
      <div className={bem({ block, mods: this.getBemMods() })}>
        {this.renderIcon()}
        {!edited ? this.renderContent() : null}
        {!edited ? this.renderActions() : null}
        {edited ? this.renderEditing() : null}
      </div>
    );
  }
}
