import Head from "next/head";
import info from "./api/data/info.json";


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
          src="img/homePagePic.jpeg"
        />
        <div>
          {info.data.map((place, idx) => {
            return (
              <div key={idx} className="flex-col h-60 w-120">
                <img
                  className="object-scale-down h-48 w-96"
                  src={place.imgURL}
                />
                <h4>{place.Name}</h4>
                <h6>{place.Description}</h6>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
