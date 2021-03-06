import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from './Api'

class Home extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          genres: [],
          isLoading: false
        }
      }
      componentDidMount(){
        this.setState({ isLoading: true})
        api.loadGenres()
        .then((res)=>{
          this.setState({
            isLoading: false,
            genres: res.data
          })
        })
      }
      renderGenresLink(genre){
        return (
         <span key={genre}>&nbsp;<Link to={`/series/${genre}`}>{genre}</Link>&nbsp;</span>
        )
      }
   render(){
       return(
           <div>
             <section id="intro" className="intro-section">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <h1><Link to={'/'}><img src="images/logo.png" alt="Series" /></Link></h1>
                    <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
                    </div>
                </div>
                </div>
             </section>
            <section id='link'>
            {
                this.state.isLoading &&
                <span>Aguarde, carregando...</span>
            }
            {
                !this.state.isLoading &&
                <div>
                Ver séries do gênero:
                { this.state.genres.map(this.renderGenresLink)}
                </div>
            }
            </section>
      </div>
    )
   }
}

export default Home