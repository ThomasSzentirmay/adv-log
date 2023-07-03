const {getData, saveData} = require('../db');
const {v4} = require('uuid');

class User {
    static create(formData) {
        const data = getData();
        const userExists = data.users.find(u => u.username === formData.username);

        // Ensure form inputs have been filled out
        if (!formData.username || !formData.password) throw new Error('empty-creds');

        // Check if user already exists in the db
        if (userExists) throw new Error('user-exists');

        const user = {
            id: v4(),
            ...formData
        };

        data.users.push(user);

        saveData(data);

        return user;
    }
}

module.exports = User;