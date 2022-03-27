// import Axios from "axios"
const axios = require("axios").create({
    baseURL: (process.env.REACT_APP_API_SITE_NAME || 'http://localhost:8080') + '/api',
    headers: {
        Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
        'Content-Type': 'application/json;charset=utf-8',
    },
})

// export const

// SIGN UP PAGE
export const signup =  async (formData) => {
    url = "/signup"
    const { data }  = await axios.post(url, formData)
    return data
}

// LOGIN PAGE
export const login =  async (formData) => {
    url = "/login"
    const { data }  = await axios.post(url, formData)
    return data
}

// USER PAGE
export const showUser =  async (userId) => {
    url = `/user/${userId}`
    const { data }  = await axios.get(url)
    return data
}
export const updateUser =  async (userId, formData) => {
    url = `/user/${userId}`
    const { data }  = await axios.post(url, formData)
    return data
}
// HOME PAGE
export const updateData =  async (deviceId, formData) => {
    url = `/device/${deviceId}/data`
    const { data }  = await axios.post(url, formData)
    return data
}

// HOME PAGE (NO.1)
export const loadAreasByUser =  async (userId) => {
    url = `/user/${userId}/area`
    const { data }  = await axios.get(url)
    return data
}
export const loadDevicesByArea =  async (areaId) => {
    url = `/area/${areaId}/device`
    const { data }  = await axios.get(url)
    return data
}

// HOME PAGE (NO.2)
export const loadListTypeNameByUser = async (userId) => {
    url = `/user/${userId}/type`
    const { data }  = await axios.get(url)
    return data
}
export const loadDevicesByTypeNameAndArea = async (typeName, areaId) => {
    url = `/${typeName}/${areaId}/device`
    const { data }  = await axios.get(url)
    return data
}

// DASHBOARD
export const loadDatasByDevice = async (deviceId) => {
    url = `/device/${deviceId}/data`
    const { data }  = await axios.get(url)
    return data
}

// MODE
export const loadModesByUser = async (userId) => {
    url = `/user/${userId}/mode`
    const { data }  = await axios.get(url)
    return data
}
export const updateMode = async (modeId, formData) => {
    url = `/mode/${modeId}`
    const { data } = await axios.post(url, formData)
    return data
}
