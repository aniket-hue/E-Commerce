import React from 'react';
import Category from './Category/Category';
import { withRouter } from 'react-router-dom';

const Categories = (props) => {
    return (
        <div>
            <Category type={props.match.params.category} />
        </div>

    )
}
export default withRouter(Categories);