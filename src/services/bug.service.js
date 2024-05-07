import Axios from 'axios'

var axios = Axios.create({
    withCredentials: true,
})

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`

export const bugService = {
    query,
    getById,
    save,
    remove,
}

async function query(filterBy = {}) {
    console.log(filterBy)
    var { data: bugs } = await axios.get(BASE_URL)

    if(filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        bugs = bugs.filter(bug => regex.test(bug.title) || regex.test(bug.desc))
    }

    if(filterBy.minSeverity) {
        bugs = bugs.filter(bug => bug.severity >= filterBy.minSeverity)
    }
    return bugs
}

async function getById(bugId) {
    const { data: bug } = await axios.get(BASE_URL + bugId)
    return bug
}

async function remove(bugId) {
    return await axios.get(BASE_URL + bugId + '/remove')
}

async function save(bug) {
    const { title, severity, desc, createdAt, _id } = bug
    
    let params = `?title=${title}&severity=${severity}&desc=${desc}`
    if(bug._id) params += `&createdAt=${createdAt}&_id=${_id}`
    
    const { data: savedBug } = await axios.get(BASE_URL + 'save' + params)
    return savedBug
}