import constantHTML from './constantHTML'
import { apiServer } from '../src/api/baseApi'
import { createMockApi } from 'vi-fetch'

export const render = (content) => {
    document.body.innerHTML = constantHTML
    const app = document.querySelector('#app')
    app.innerHTML = content
}

const mockApi = createMockApi({baseUrl: apiServer})

export const mockGet = mockApi.mockGet
export const mockPost = mockApi.mockPost

export const localServerAddress = 'http://localhost:3000'