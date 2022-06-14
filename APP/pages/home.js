import Head from 'next/head'
import Nav from '../components/Navbar/navbar'
import Dashbox from '../components/Dashboard/Dashbox'
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
      :root{
        --search-btn-width:45px;
        --grey_black:#39424E;
        --yellow:#FFDE59;
        --blue:#5271FF;
        --orange:#FF5757;
        --flyer-height:500px;
        --flyer-B_width:600px;
        --pink:#A7AFD2;
    }
    *,*:focus,*:hover{
        outline:none;
    }
    *{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        color: var(--grey_black);
        font-family: Open Sans,sans-serif,serif, Helvetica;
    }
    * span{
        color: inherit;
        font-family: inherit;
    }
      `}</style>
      <Dashbox/>
    </div>
  )
}