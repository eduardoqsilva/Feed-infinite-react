import { useEffect, useState } from "react"
import { InfiniteScroll } from "./components/InfiniteScroll"
import { Post } from "./components/Post"
import { UseFetching } from "./services/api/useFetching"
import { randomDate } from "./constants/DateGenerator"
import { Loading } from "./components/Loading"
import { Header } from "./components/Header"

interface TypePostItem {
  body?: string
}
interface TypeUserItem {
  firstName?: string
  image?: string
}

function App() {

  const [skip, setSkip] = useState(0)
  const [dataPosts, isFetchingPosts] = UseFetching('posts', skip)
  const [dataUsers, isFetchingUsers] = UseFetching('users', skip)
  const [users, setUsers] = useState<object[]>([])
  const [posts, setPosts] = useState<object[]>([])

  useEffect(() => {
    if (typeof dataUsers === 'object') {
      if (Array.isArray(dataUsers)) {
        setUsers((prev) => [
          ...prev,
          ...dataUsers
        ])
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUsers])

  useEffect(() => {
    if (typeof dataPosts === 'object') {
      if (Array.isArray(dataPosts)) {
        setPosts((prev) => [
          ...prev,
          ...dataPosts
        ])
      }
    }
  }, [dataPosts])

  return (
    <>
      <Header />
      {dataPosts && dataUsers ? users.map((item: TypeUserItem, index) => {
        const itemPost: TypePostItem = posts[index]
        const text = itemPost && itemPost.body ? itemPost.body : ''
        const name = item?.firstName
        const img = item?.image
        return (
          <Post key={index + 'post'}
            user={[`${name}`, `@${name}`, `${img}`]}
            text={text}
            imgPost={''}
            date={randomDate()}
          />
        )
      }) : ''}

      {
        !isFetchingPosts && !isFetchingUsers && skip <= 100 ?
          <InfiniteScroll callback={() => setSkip((prev) => {
            if (prev < 100) {
              return prev + 10;
            } else {
              return prev;
            }
          })} />
          : ''
      }
      {skip >= 100 ?
        <h4 style={{ textAlign: 'center' }}>Sem mais posts, volte mais tarde!</h4>
        : <Loading
          load={isFetchingPosts === true && isFetchingUsers ===
            true ? true : false
          }
        />
      }
    </>
  )
}

export default App
