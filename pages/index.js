import Link from 'next/link'

function HomePage(){
    return <>
    <h2>Home page</h2>
    <ul>
        <li>
            <Link href="news/nextjs-is-a-great-framework">
                NewtJs is a great framework
            </Link>
        </li>
        <li>
          something else
        </li>
    </ul>
    </>
   
}

export default HomePage;