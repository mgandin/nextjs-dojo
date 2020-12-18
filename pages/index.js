import Layout from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/api'



export async function getStaticProps() {
  const allPropsData = await getSortedPostsData();
  
  return {
    props: {
          allPropsData
    }
  }
}

export default function Home({ allPropsData }) {
  console.log(allPropsData)
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPropsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              <Link href={`/posts/${id}`}>{id}</Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}