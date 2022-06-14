import React, { Component } from 'react'
import Head from 'next/head'
import Test from "../components/Test"
import Profile from '../components/Dashboard/Profile/profile'
import Leftbar from '../components/Dashboard/leftbar'
import Contactbar from '../components/House_page/rightbar/contactbar'
export default class test_index extends Component {
  render() {
    return (
      <div>
        <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>KAV</title>
        <link rel="icon" href="/Logo (Small).svg" type="image/x-icon"/>
        </Head>
        <Contactbar/>
      {/* <Test data={["India","Pakistan","Afganistan","Nepal","Bhutan","China","shri lanka"]} /> */}
      </div>
    )
  }
}
