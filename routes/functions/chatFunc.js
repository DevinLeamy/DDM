const mongojs = require("mongojs")

//Create chat with given title
function createChat(title, admin, category, global, subs) {
        return {
                _id: new mongojs.ObjectId(),
                title: title,
                messages: [],
                admin: admin,
                category: category,
                global: global,
                subs: subs
        }
}

module.exports = { createChat }