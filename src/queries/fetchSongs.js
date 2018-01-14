import gql from 'graphql-tag'

export default gql`
query songQuery($id: ID!) {
    album(id: $id) {
        id
        songs {
            id
            name
            length
            imageURL
            }
    }
}`
