import React from 'react';
import Navbar from '../../Components/Navigation/Navbar/Navbar';
import Category from './Category/Category';
import { Link, withRouter } from 'react-router-dom';

const Categories = (props) => {
    console.log(props)
    return (
        <div>
            <Category type={props.match.params.category} />
        </div>

    )
}
export default withRouter(Categories);