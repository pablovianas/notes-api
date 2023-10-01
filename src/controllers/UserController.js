const { hash, compare } = require('bcryptjs');
const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');


class UserController {
    async create(req, res) {
        const { name, email, password } = req.body //pego as informações enviadas, como de um form
        const db = await sqliteConnection()

        const checkIfUserExists = await db.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkIfUserExists) throw new AppError(`User ${email} already exists`)

        const hashedPassword = await hash(password, 8)

        await db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

        return res.status(201).json()
    }

    async update(req, res){
        const { name, email, password, old_password } = req.body;
        const { id } = req.params; 

        const db = await sqliteConnection();
        const user = await db.get("SELECT * FROM users WHERE id = (?)", [id]);

        if( !user ) throw new AppError("User not found");

        const userWithUpdatedEmail = await db.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) throw new AppError("Email already in use");

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if (password && !old_password){
            throw new AppError("Old password is required");
        }
        if (password && old_password){
            const checkOldPassword = await compare(old_password, user.password);
            if(!checkOldPassword) throw new AppError("Old password does not match");
            user.password = await hash(password, 8);
        }

        await db.run(`UPDATE users SET name = ?, email = ?, password = ?, updated_at = DATETIME('now') WHERE id = ?`, [user.name, user.email, user.password, id]);

        return res.status(200).json();

    }
}


module.exports = UserController;