import React from 'react'
import Timer from '../components/timer/timer.jsx'
import { Helmet } from 'react-helmet'

export const Timerpage = () => {
  return (<>
    <Helmet><title>Timer - Meditapp</title></Helmet>
    <Timer />
    </>
  )
}