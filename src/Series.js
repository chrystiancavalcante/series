import React, { Component } from 'react'

class Series extends Component {
    render(){
        return <section id="intro" className="intro-section"><h1>Series: {this.props.match.params.genre}</h1></section>
    }
}

export default Series