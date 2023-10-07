const knex = require('../database/knex');

class TagsController {
    async list(req, res) {
        const user_id  = req.user.id;

        const tags = await knex('tags').where({ user_id }).orderBy('name');

        return res.json(tags);
    }
}

module.exports = TagsController;