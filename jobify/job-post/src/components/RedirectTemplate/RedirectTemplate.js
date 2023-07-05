import { useEffect } from "react"

const RedirectTemplate = () => {
  useEffect(() => {
    //页面跳转
    window.location.replace(`${window.location.origin}/register`)
  }, [])
  return (
    <h2>
      Redirecting...
    </h2>
  )
}

export default RedirectTemplate