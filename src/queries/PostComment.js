import gql from 'graphql-tag'

export default gql`
mutation addComment($user: String, $text: String, $song_id:ID!){
    addComment(user: $user, text: $text, song_id: $song_id) {
      id
    }
  }`