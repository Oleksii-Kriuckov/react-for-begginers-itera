import  { createContext } from 'react'

export const authorData = {
    authorName: 'AlexKruk', 
    twitter: '@alexkruk2109'
}
export const AuthorDataContext = createContext(authorData)