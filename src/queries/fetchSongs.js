import gql from 'graphql-tag'

export default gql`
query songQuery($id: ID!) {
    album(id: $id) {
    songs {
        name
        imageURL
        length
        description
        }
    }
}`

