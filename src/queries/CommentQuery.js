import gql from 'graphql-tag'

export default gql`
query commentQuery($id: ID!) {
    song(id: $id) {
    id
    comments {
        text
        user
        }
    }
}`