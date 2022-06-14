import Head from 'next/head'
import Nav from '../components/Navbar/navbar'
import Flyer from "../components/Flyer/flyer"
import HboxContainer from '../redux/containers/Hbox.container'
export default function Home(props) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>KAV</title>
        <link rel="icon" href="/Logo (Small).svg" type="image/x-icon"/>
      </Head>
      <Nav/>
      <Flyer/>
      <HboxContainer/>
    </div>
  );
}
