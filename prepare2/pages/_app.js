import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
    return (
        <>
            <title>NodeBird</title>   
            <Component />
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
