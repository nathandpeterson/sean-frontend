import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import AlbumBrowser from './components/AlbumBrowser'
import AlbumInfo from './components/AlbumInfo'
import PlayView from './components/PlayView'
import HomePage from './components/HomePage'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://sean-api.herokuapp.com/graphql' }),
  cache: new InMemoryCache(),
  dataIdFromObject: object => object.id,
})


class App extends Component {
  constructor(){
    super()

    this.state = {}
  }

  render() {
    return (
      <ApolloProvider client={ client }>               
        <BrowserRouter>
          <Switch>
            <Route exact path="/albums/:id/songs/:songId/play" component={ PlayView } />
            <Route exact path="/albums/:id/songs" component={ AlbumInfo } />
            <Route exact path="/albums/:id" component={ AlbumBrowser }/>
            <Route path="/" component={ HomePage } />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
