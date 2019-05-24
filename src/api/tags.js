import API from '@/api'

export const fetchTags = (param) => API.get('/tags?_limit=10')
