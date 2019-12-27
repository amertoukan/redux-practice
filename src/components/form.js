import React, { Component } from 'react';

import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class Form extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            title: '', 
            body: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [ e.target.id ] : e.target.value
        })
    }

    onSubmit(e){ 
        e.preventDefault();
       const post = {
            title: this.state.title, 
            body: this.state.body
        }
        console.log(post)
        console.log('submit')
        this.props.createPost(post);
    }
    render() {
    const styles = {
        title: { 
            width: '50%',
            height: '20px',
            margin: 'auto',
            marginTop: '20px',
        }, 
        body: { 
            
            width: '50%', 
            height: '100px',
            margin: 'auto',
            marginTop: '10px',
            marginLeft: '50px',
        }
    }
        return (
            <div>
                <input id="title" value = {this.state.title} onChange={this.handleChange} style={styles.title}></input>
                <br/>
                <input id="body" value = {this.state.body} onChange = {this.handleChange} style={styles.body}></input>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

Form.propTypes = {
    createPost : PropTypes.func.isRequired, 
}

export default connect(null,{ createPost })(Form);