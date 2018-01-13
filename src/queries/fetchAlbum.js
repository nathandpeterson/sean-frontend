import gql from 'graphql-tag'

export default gql`
query albumQuery($id: ID!) {
    album(id: $id) {
    id
    name
    artist
    imageURL
    description
    }
}`

