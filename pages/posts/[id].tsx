import { singlePostType } from '..'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

type postDataType = {
  params: {
    id: string
  }
}

type postType = {
  postData: singlePostType
}

export async function getStaticProps({ params }: postDataType) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }: postType) {
  console.log(postData)
  return (
    <Layout home>
      <div>{postData.title}</div>
      <br />
      <div>{postData.id}</div>
      <br />
      <div>{postData.date}</div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
    </Layout>
  )
}
