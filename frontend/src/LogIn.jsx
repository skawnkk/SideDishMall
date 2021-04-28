
import queryString from "query-string";

const LogIn = (props) => {
    const result = queryString.parse(props.location.search);
    console.log(result)
    return (
		<>
		<h1>로그인 화면</h1>
		</>
	);
}
export default LogIn