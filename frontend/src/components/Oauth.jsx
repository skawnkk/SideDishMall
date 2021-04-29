import queryString from 'query-string'
import styled from 'styled-components'
import { useEffect } from 'react'
const Oauth = props => {
  const result = queryString.parse(props.location.search)
  console.log(result)
  console.log(props)
  //localhost:8080/login?code={result.code} put 요청
  //   useEffect(() => {
  //     props.history.push('/')
  //   })
  const LogInLoading = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    background: url('./login_load.gif') no-repeat center center;
    width: 100%;
    height: 100%;
  `
  return (
    <>
      <LogInLoading></LogInLoading>
    </>
  )
}
export default Oauth
