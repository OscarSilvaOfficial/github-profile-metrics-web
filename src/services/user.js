import axios from './axios'

export const getUserMetrics = async (githubUser) => {
    try {
        const response = await axios.get('/user', { params: githubUser })
        return response.data
    } catch (error) {console.error(`Não foi possível conectar a api\n${error}`)}
}