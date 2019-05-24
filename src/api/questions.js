import API from '@/api'

export const fetchQuestions = (param) => API.get('/questions?_limit=10')
