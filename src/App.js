import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import AlbumBrowser from './components/AlbumBrowser'
import SongInfo from './components/SongInfo'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

class App extends Component {
  
  render() {
    return (
      <ApolloProvider client={ client }>
        <div className="container">
          <div className="row">
            <div className="main col-md">
              <BrowserRouter>
                <Switch>
                  <Route path="/albums/:id" component={ AlbumBrowser }/>
                  <Route path="/" component={AlbumBrowser} />
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
