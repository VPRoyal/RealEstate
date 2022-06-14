import Head from 'next/head'
import Nav from '../../components/Navbar/navbar'
import House from '../../components/House_page/House'
//----->>>>>>>> Data is retreiving from a test JSON file for Testing
import data from '../../public/data.json'
function Home(props) {
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
        box-sizing: border-box;
        font-family: Open Sans,sans-serif,serif, Helvetica;
    }
      `}</style>
      <Nav/>
      <House data={props.house} />
    </div>
  )
}
function check(id){
  for (let i = 0; i < data.length; i++) {
    if (data[i].pid===id) {
      return data[i]
    }
    
  }
}
export async function getStaticPaths() {
  
  const paths=[]
  // const paths = houses.map((post) => ({
  //   params: { house_id: post.pid },
  // }))
  return { paths, fallback: 'blocking' }
}
export async function getStaticProps({query,params}) {
  const {house_id}= query || params
  const res = await fetch(`http://localhost:5000/ppts/?id=${house_id}`)
  const house = await res.json()
  // const house=check(house_id)     // "params" are the part of "prop" receives from "Paths"
  return { props: { house },
           revalidate: 1,
         }
}


export default Home;