const db = require('../data/dbConfig')

const find = () => db('schemes')

const findById = id => {
    return db('schemes').where({id}).first()
}

const findSteps = id => {
    return db('steps as st')
    .join('schemes as sc', 'sc.id', 'st.scheme_id')
    .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
    .where('st.scheme_id', 2)
}

const add = scheme => {
    return db('schemes').insert(scheme)
    .then(ids => {
        return findById(ids[0])
    })
}

const update = (changes, id) => {
    return db('schemes').where({id})
    .update(changes)
    .then(res => {
        return findById(id)
    })
}

const remove = id => {
    return db('schemes').where({id}).del()
    .then(res => `Deleted scheme with the id of ${id}`)
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}