import ArticleStyles from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({article}) => {
    
  return (
    <div>
        <Link href={"/article/[id]"} as={`/article/${article.id}`} >
            <div className={ArticleStyles.card}>
                <h3>{article.title} &rarr; </h3>
                <p>{article.body}</p>
                </div>
            </Link>
    </div>
  )
}

export default ArticleItem