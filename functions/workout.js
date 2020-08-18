const fauna = require("./utils/fauna")

const handler = async (event, context) => {
    const method = event.httpMethod
    const {user} = context.clientContext

    let data

    switch (method) {
        case "GET": {
            const re = new RegExp("/api/workout/(?<id>.*)", "g")
            const exec = re.exec(event.path)

            if (exec) {
                data = await fauna.readWorkoutById(exec.groups.id)

                if (data.data.email !== user.email) {
                    const response = {
                        statusCode: 401,
                        body: "You are not authorized to view that workout.",
                    }

                    return response
                }
            } else {
                data = await fauna.readWorkoutsByEmail(user.email)
            }

            break
        }

        case "POST": {
            const body = JSON.parse(event.body)
            data = await fauna.createWorkout(user, body)
            break
        }
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    }

    return response
}

module.exports = {handler}
