import React from 'react';
import PropTypes from 'prop-types';
class Display extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.value}</p>
            </div>
        );
    }
}

Display.propTypes = {
    value: PropTypes.string,
}
export default Display;