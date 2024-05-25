import { Component }  from 'react'



class Example extends Component {
    constructor(props) {
        super(props) 
        this.state = { text: 'GeekTech'}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({ text: 'Geeks' })
    }
    componentDidMount() {
        console.log('did mount');
    }
    compo
    render() {
       return(
        <div>
            <p>{this.state.text}</p>
            <button onClick={this.handleClick}>Change Text</button>
            </div> 
       ) 
    }
}


export  default Example;