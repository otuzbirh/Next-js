// import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import {server} from './../../config/index'



export default function Home({articles}) {

  return (
    <div>
      {/* <Head>
        <title>Next course</title>
        <meta name='keywords' content='web' />
      </Head> */}
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
