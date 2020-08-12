const USER_MUTATION = `
    mutation createUser($data: UserInput!) {
        createUser(data: $data) {
            id
            email
        }
    }
`

module.exports = {USER_MUTATION}
