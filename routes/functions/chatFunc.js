const mongojs = require("mongojs")

//Create chat with given title
function createChat(title, adminId, category, global, subs, tags) {
        return {
                _id: new mongojs.ObjectId(),
                title: title,
                messages: [],
                adminId: adminId,
                category: category,
                global: global,
                subs: subs,
                tags: tags,
                image: "$$$Default$$$"
        }
}

//Creates a chat sub from a chat
function createChatSub(chat) {
        return {
                _id: chat._id,
                title: chat.title,
                image: chat.image,
                tags: chat.tags,
                subCount: chat.subs.length
        }
}

//Creates a new tag object
function createTag(tag) {
        return {
                _id: new mongojs.ObjectId(),
                tag: tag,
                chatIds: []
        }
}

//Creates a new category object
function createCategory(category) {
        return {
                _id: new mongojs.ObjectId(),
                category: category,
                chatIds: []
        }
}
module.exports = { createChat, createTag, createCategory, createChatSub }