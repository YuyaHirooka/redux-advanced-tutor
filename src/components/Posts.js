import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Posts extends Component {
    render() {
        return (
            <ul>
                {this.props.map((post, i) => <li key={i}>{post.title}</li>)}
            </ul>
        )
    }
}

PropTypes.propTypes = {
    posts: PropTypes.array.isRequired,
}