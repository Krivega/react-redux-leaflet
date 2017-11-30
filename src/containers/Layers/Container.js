import React from 'react';
import Layers from 'components/Layers';
import LayersList from 'components/LayersList';
import LayersItem from 'components/LayersItem';

export default class LayersConnected extends React.PureComponent {
  renderItem = (item, index) => {
    const id = item.get('id');
    const markers = item.get('markers');
    const { activeLayerId } = this.props;

    return (
      <LayersItem
        id={id}
        key={id}
        name={item.get('name')}
        active={id === activeLayerId}
        onClick={this.props.onClickItem.bind(this, id, markers)}
        onChangeName={this.props.onChangeItemName.bind(this, id)}
        onClickRemove={this.props.onClickRemoveItem.bind(this, id)}
      />
    );
  };

  render() {
    const { items, hasChanges, activeLayerId, onAdd, onClickSaveChanges } = this.props;

    return (
      <Layers
        hasChanges={hasChanges}
        onAdd={onAdd}
        onClickSaveChanges={onClickSaveChanges.bind(this, activeLayerId)}
      >
        <LayersList>{items.map(this.renderItem)}</LayersList>
      </Layers>
    );
  }
}
