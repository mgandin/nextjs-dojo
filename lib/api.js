const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getSortedPostsData() {
    const data = await fetchAPI(`query {
        posts {
          nodes {
            id
            title
            date
          }
        }
      }`);
     return data.posts.nodes

}

export async function getAllPostIds() {
    const data = await fetchAPI(`query {
        posts {
          nodes {
            id
          }
        }
      }`);
    return data.posts.nodes.map(element => {
        return {
          params: {
            id: element.id
          }
        }
    })
}

export async function getPostData(id) {
    const allPostsData = await getSortedPostsData()
    return allPostsData.find(element => element.id == id)
}