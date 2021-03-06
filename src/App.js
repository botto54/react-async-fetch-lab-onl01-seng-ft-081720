// create your App component here
import React from 'react'

class App extends React.Component {
    state = {
        peopleSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({peopleSpace: people}))
    }

    render(){
        return(
            <div>
                {this.state.peopleSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}

export default App