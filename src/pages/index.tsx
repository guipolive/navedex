import Router from "next/router"
import { useEffect } from "react"


export default function Index() {

  useEffect(() => {
    const {pathname} = Router
		if(pathname == '/' ){
			Router.push('/home')
		}
  }, [])

  return (
    null
  )
}
