import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import AlbumBrowser from './components/AlbumBrowser'
import Player from './components/Player'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }, fetch),
  cache: new InMemoryCache()
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <BrowserRouter>
                <Switch>
                  <Route path="/" component={ AlbumBrowser } />
                  <Route path="/albums/:id" component={ Player }/>
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
