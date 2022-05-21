import { FC } from 'react'
import { authorData, AuthorDataContext } from './context'
import { Contacts } from './cotacts'

const Main = () => (
    <main>
        <h1>Hello, this my blog page</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt accusamus recusandae natus neque molestias optio, perferendis nobis suscipit velit, est in assumenda minima cum aperiam maiores reiciendis blanditiis libero quae.
        </p>
        <Contacts />
    </main>
)

const Footer: FC<{ author: string }> = ({ author }) => {
    const year = new Date().getFullYear();
    return (
        <footer>
            By {author}. (C) {year}
        </footer>
    )
}

const UseContext = () => {
    const { authorName } = authorData;
    return (
        <>
            <AuthorDataContext.Provider value={authorData} >
                <Main />
            </AuthorDataContext.Provider>
            <Footer author={authorName} />
        </>
    )
}

export default UseContext