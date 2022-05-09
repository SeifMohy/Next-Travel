import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import info from "./api/data/info.json"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Travel Plus</title>
        <meta name="description" content="Some Places to Visit in Egypt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="nav">
        <h1 className="p-5 font-bold text-blue-400 text-2xl ">Next Travel</h1>
      </div>

      <main>
        <img className="w-full h-80 object-cover object-center" src="img/homePagePic.jpeg"/>
        <div>
          {info.data.map((place)=>{
            return(
              <div>{place.Name}</div>
            )
          })}
        </div>
      </main>

    </div>
  )
}
