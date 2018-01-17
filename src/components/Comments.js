import React, { Component } from 'react'
import AddCommentForm from './AddCommentForm'

class Comments extends Component {
    constructor(props){
        super(props)

        this.state = {commentForm: false }
    }

    renderAddCommentBtn = () => {
        return  <div    onClick={this.toggleCommentForm} 
                        className="card add-comment">
                     <i className="fa fa-plus"></i> 
                </div>
    }

    toggleCommentForm = () => {
        this.setState({commentForm: !this.state.commentForm})
    }

    render(){ 
        
        return <div>
            {this.props.comments.map((comment, i)=> {
                return <div key={i} className="card">
            <p className="card-title" > {comment.text} – {comment.user} </p>
                </div>
            })}
                {!this.state.commentForm && this.renderAddCommentBtn()}
                {this.state.commentForm &&
                <AddCommentForm song_id={ this.props.song_id }
                                toggleCommentForm={ this.toggleCommentForm }  />}
        </div>
    }
}


export default Comments