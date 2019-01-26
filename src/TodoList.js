import React, {Component} from 'react';
class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [
                'learn english',
                'learn react'
            ],
            inputValue: ''
        }
    }
    handleButtonClick () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleInputChange (e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    handleDeletItem (index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        });
    }
    render() {
        return  (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleButtonClick.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleDeletItem.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
            
        )
    }
}
export default TodoList