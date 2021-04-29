import queryString from 'query-string'
import styled from 'styled-components'
import {useEffect} from 'react'
import { useFetch } from './useFetch'
const Oauth = props => {
  const result = queryString.parse(props.location.search)
 
  const url = process.env.REACT_APP_API_URL + `/login?code=${result.code}`
  const [data, loading] = useFetch(url)
  if (!loading) {
    localStorage.setItem('isLogIn', 'true')
    localStorage.setItem('userId', data.userId)
    localStorage.setItem('token', data.token)
  }
  useEffect(()=>{

  })

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
