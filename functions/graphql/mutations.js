const USER_MUTATION = `
    mutation createUser($data: UserInput!) {
        createUser(data: $data) {
            netlifyID
            stripeID
        }
    }
`

module.exports = {USER_MUTATION}
