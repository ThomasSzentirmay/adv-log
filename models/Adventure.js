const {getData, saveData} = require('../db');
const {v4} = require('uuid');
const dayjs = require('dayjs');

class Adventure {
    static create(formData) {
        const data = getData();

        // Ensure form inputs have been filled out
        if (!formData.title || !formData.location) throw new Error('empty-data');

        const adventure = {
            id: v4(),
            createdOn: dayjs().unix(),
            ...formData
        };

        data.adventures.push(adventure);

        saveData(data);

        return adventure;
    }

    static getByUserId(user_id) {
        const { adventures } = getData();
        const filtered = adventures.filter(a => a.user_id === user_id.id);
        const sorted = filtered.sort((a, b) => b.createdOn - a.createdOn);
        const output = sorted.map(a => ({
            ...a,
            createdOn: dayjs.unix(a.createdOn).format('M/DD/YYYY')
        }))

        return output;
    }
}

module.exports = Adventure;