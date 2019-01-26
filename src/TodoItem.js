import React, { Component }from 'react';

class TodoItem extends Component {
    constructor (props) {
        super();
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }
    handleDeleteItem () {
        const { handleDeletItem, index} = this.props;
        // this.props.handleDeletItem(this.props.index);
        handleDeletItem(index);
    }
    render () {
        const { cotent } = this.props;
        return (
            <div onClick={this.handleDeleteItem}>
                {cotent}
            </div>
        )
    }
}

export default TodoItem