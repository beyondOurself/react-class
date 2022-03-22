import request from './request'

export const RegsiterApi = (params) => request.post('/register',params)
export const LoginApi = (params) => request.post('/login', params)
export const ArticleApi = (params) => request.get('/article', { params })

export const ArticleAddApi = (params) => request.post('/add', params)

export const ArticelSeachApi = (params) => request.get(`/article/${params.id}`)
export const ArticelUpdateApi = (params) => request.post(`/article/update`, params)