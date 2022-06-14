import Head from 'next/head'
import Nav from '../components/Navbar/navbar'
import Posting from "../components/Posting/Posting"
export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>House</title>
        <link rel="icon" href="/Logo (Small).svg" type="image/x-icon"/>
      </Head>
      <style jsx global>{`
      body{
        padding: 0px;
        margin: 0px;
    
    }
    *{
      background-clip: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
        font-family: Open Sans,sans-serif,serif, Helvetica;
    }
      `}</style>
      <Posting/>
    </div>
  )
}