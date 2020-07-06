const mongojs = require("mongojs")

//Create chat with given title
function createChat(title, admin, category, global, subs, tags) {
        return {
                _id: new mongojs.ObjectId(),
                title: title,
                messages: [],
                admin: admin,
                category: category,
                global: global,
                subs: subs,
                tags: tags,
                image: "$$$Default$$$"
        }
}

//Creates a new tag object
function createTag(tag) {
        return {
                _id: new mongojs.ObjectId(),
                tag: tag,
                chatSubs: []
        }
}

//Creates a new category object
function createCategory(category) {
        return {
                _id: new mongojs.ObjectId(),
                category: category,
                chatSubs: []
        }
}
module.exports = { createChat, createTag, createCategory }