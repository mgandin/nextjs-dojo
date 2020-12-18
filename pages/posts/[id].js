import Layout from '../../components/layout'
import Head from 'next/head'



import { getAllPostIds, getPostData } from '../../lib/api'

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
    return (
      <Layout>
          <Head>
            <title>{postData.title}</title>
        </Head>
        {postData.title}
        <br />
        {postData.date}
      </Layout>
    )
  }