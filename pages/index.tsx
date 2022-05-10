import Head from "next/head";
import Link from "next/link";
import info from "./api/data/info.json";
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Travel Plus</title>
        <meta name="description" content="Some Places to Visit in Egypt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          className="w-full h-80 object-cover object-center"
          src="img/hero.jpg"
        />
        <div className="grid md:grid-cols-3 gap-5 m-5 justify-items-center">
          {info.data.map((place, idx) => {
            return (
              <div key={idx} className="rounded overflow-hidden shadow-lg max-w-xs">
                <Image
                  src={place.imgURL}
                  alt="Picture of the author"
                  width={500}
                  height={300}
                />
                <div className="m-3">
                <p className="text-xl font-semibold mb-2">{place.Name}</p>
                <p className="text-sm">{`${place.Description.substring(0,160)}...`}</p>
                <Link href={`places/${place.Name}`}>
                <a className="text-sm text-red-700">MORE DETAILS</a>
                </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
