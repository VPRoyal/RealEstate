import Head from 'next/head'
import Nav from '../components/Navbar/navbar'
import Accounts from '../components/Account/accounts'
export default function account({acc}) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>KAV</title>
        <link rel="icon" href="/Logo (Small).svg" type="image/x-icon"/>
      </Head>
      <Accounts acc={acc} />
    </div>
  )
}
account.getInitialProps = ({ query: {acc} }) => {
  return { acc }
}