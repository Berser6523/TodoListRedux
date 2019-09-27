import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as todoActions from '../actions/todos'


class TodoList extends Component {
    
    state = {
        newTodoText: '',
    }

    addNewTodo = () =>{
        this.props.addTodo(this.state.newTodoText)

        this.setState({ newTodoText: '' })
    }

    render() { 
        const { todos } = this.props

        return ( 
            <Fragment>
                <ul>
                    {todos.map(todo => (<li>{todo.text}</li>))}
                </ul>

                <input
                    type="text"
                    value={this.state.newTodoText}
                    onChange={(e) => this.setState({ newTodoText: e.target.value })}
                    />

                <button onClick={this.addNewTodo} >Novo Todo</button>
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    todos: state.todo
})

const mapDispatchToProps = dispacth => bindActionCreators(todoActions, dispacth)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);