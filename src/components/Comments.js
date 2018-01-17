import React, { Component } from 'react'
import CommentQuery from '../queries/CommentQuery'
import { graphql } from 'react-apollo'

class Comments extends Component {

    render(){   
        return <div>
            {this.props.comments.map((comment, i)=> {
                return <div key={i} className="card">
            <p className="card-title" > {comment.text} – {comment.user} </p>
                </div>
            })}
            <div className="card add-comment">
                <i className="fa fa-plus"></i> 
            </div>
        </div>
    }
}


export default Comments