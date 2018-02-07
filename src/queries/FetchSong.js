import gql from 'graphql-tag'

export default gql` query songQuery($id: ID!) {
    song(id: $id) {
    id
    name
    artist
    imageURL
    audioURL
    comments{
        id
        text
        user
        }
    }
}`