import React from 'react'
import style from './Notfound.module.css'
import {Helmet} from "react-helmet";

export default function Notfound() {
  return <>
   <Helmet>
      <meta charSet="utf-8" />
      <title>404 </title>
    </Helmet>
    <div>Notfound</div>
    </>
}
