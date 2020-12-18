export function getSortedPostsData() {
    return [
        {
            id: 'ssg-ssr',
            title: 'When to Use Static Generation v.s. Server-side Rendering',
            date: '2020-01-02'
        },
        {
            id: 'pre-rendering',
            title: 'Two Forms of Pre-rendering',
            date: '2020-01-01'
        }
    ]
}

export function getAllPostIds() {
    return [{ params: { id: 'pre-rendering' } }, { params: { id: 'ssg-ssr' } }]
}

export function getPostData(id) {
    const allPostsData = getSortedPostsData()
    return allPostsData.find(element => element.id == id)
}