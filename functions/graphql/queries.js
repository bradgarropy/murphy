const USER_QUERY = `
    query getUserByEmail($email: String!) {
        getUserByEmail(email: $email) {
            id
            email
        }
    }
`

module.exports = {USER_QUERY}
