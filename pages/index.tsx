import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
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
    </Layout>
  )
}
