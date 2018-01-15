import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import AlbumBrowser from './components/AlbumBrowser'
import AlbumInfo from './components/AlbumInfo'
import SongInfo from './components/SongInfo'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const Home = () => {
  return <div className="card"> Go to an album link
  <div className="list-group">
    <Link to="/albums/1">
    <div className="list-group-item">cowboy hat sermons</div>
    </Link>
    <div className="list-group-item">smoof</div>
    <div className="list-group-item">whatever</div>
  </div>
  </div>
}

class App extends Component {
  
  render() {
    return (
      <ApolloProvider client={ client }>
        <div className="container">
          <div className="row">
            <div className="main col-md">
            <div className="card-container">
                <div className="card" onClick={ this.revealAlbumInfo } >
              <BrowserRouter>
                <Switch>
                 <Route path="/albums/:id/songs" component={ AlbumInfo } />
                  <Route exact path="/albums/:id" component={ AlbumBrowser }/>
                  <Route path="/" component={ Home } />
                </Switch>
              </BrowserRouter>
              </div>
              </div>
            </div>
          </div>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
