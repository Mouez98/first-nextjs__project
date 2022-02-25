import {useRouter} from 'next/router';


function DetailPage(){
 const route =  useRouter()

console.log(route.query.newsId)

    return <h2>The Detail page</h2>
}

export default DetailPage;