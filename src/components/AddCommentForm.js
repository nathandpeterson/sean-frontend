import React, { Component } from 'react'

class AddCommentForm extends Component {
    constructor(){
        super()
        this.state ={name: '', text: ''}
    }
    commentChange = (e) => {
        this.setState({text: e.target.value})
    }
    nameChange = (e) => {
        this.setState({name: e.target.value})
    }
    submitComment =(e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        return <form>
                    <label for="comment-field">Add a comment</label>
                    <input  value={this.state.text} 
                            onChange={this.commentChange} 
                            id="comment-field" 
                            type="text" 
                            class="form-control"/>
                    <label for="name-field">Your name</label>
                    <input  value={this.state.name} 
                            onChange={this.nameChange} 
                            id="name-field" 
                            type="text" 
                            class="form-control"/>
                    <br />
                    <button type="submit" 
                            className="btn btn-block"
                            onClick={this.submitComment}>ADD COMMENT</button>
                </form>
    }
}

export default AddCommentForm