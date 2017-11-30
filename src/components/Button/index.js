import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'button';

export default class Button extends React.PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    raised: PropTypes.bool,
    stretch: PropTypes.bool,
    disabled: PropTypes.bool
  };

  getBemMods() {
    return {
      raised: !!this.props.raised,
      stretch: !!this.props.stretch
    };
  }

  handleClick = event => {
    const { onClick, disabled } = this.props;

    if (onClick === undefined || disabled) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    onClick();
  };

  renderIcon() {
    const { icon, children } = this.props;

    if (!icon) {
      return null;
    }

    const mods = {
      'icon-only': !children
    };

    return (
      <span className={bem({ block, elem: 'icon', mods })}>
        <Icon small name={icon} />
      </span>
    );
  }
  render() {
    const { children, disabled } = this.props;

    return (
      <button
        className={bem({ block, mods: this.getBemMods() })}
        onClick={this.handleClick}
        disabled={disabled}
      >
        {this.renderIcon()}
        {children}
      </button>
    );
  }
}
