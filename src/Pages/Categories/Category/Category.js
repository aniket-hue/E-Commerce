import React from 'react'
import Shopitem from '../../../Components/Shopitem/Shopitem'
import { withRouter } from 'react-router-dom';

const Category = (props) => {
    return (
        <Shopitem type={props.type} amount={8} />
    )
}

export default withRouter(Category);