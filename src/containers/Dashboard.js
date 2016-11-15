import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <h2>Dashboard</h2>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // add action creators here
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
