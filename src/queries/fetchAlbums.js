import gql from 'graphql-tag'

export default gql`
query albums {
    id
    name
    artist
    imageURL
    description
}`