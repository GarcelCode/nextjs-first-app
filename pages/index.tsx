import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export type singlePostType = {
  id: string
  date: string
  title: string
  data: string
  contentHTML: string
}

type homeType = {
  allPostsData: singlePostType[]
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }: homeType) {
  return (
    <Layout home>
      <Head>
        <title>My first app</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hola mi nombre es Samuel García y este proyecto es mi primer
          aplicación para NextJS. La fecha de creación fue 27/12/2022
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
