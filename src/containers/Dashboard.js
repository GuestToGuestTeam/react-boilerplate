import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, removeItem } from '../actions/items';

class Dashboard extends React.Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired,
        addItem: React.PropTypes.func.isRequired,
        removeItem: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.addItemHandler = this.addItemHandler.bind(this);
        this.removeItemHandler = this.removeItemHandler.bind(this);
    }

    addItemHandler(e) {
        e.preventDefault();
        const item = this.refs.item.value;
        if (item) {
            this.props.addItem(item);
        }
    }

    removeItemHandler(e) {
        e.preventDefault();
        const item = e.target.dataset.item;
        this.props.removeItem(item);
    }

    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <ul>
                    {this.props.items.map(item => {
                        return (
                            <li key={item}>
                                {item} <a href="#" data-item={item} onClick={this.removeItemHandler}>Remove</a>
                            </li>
                        );
                    })}
                </ul>
                <input type="text" ref="item" />
                <button onClick={this.addItemHandler}>Add item</button>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addItem,
        removeItem
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
