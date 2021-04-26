import { useState, useEffect } from 'react';
import axios from 'axios';
function useFetch(url) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	async function fetchUrl() {
		if (!url) return;
		await axios.get(url).then((result) => setData(result.data));
		setLoading(false);
	}
	useEffect(() => {
		fetchUrl();
	}, [url]);

	return [data, loading];
}
// function useFetch(url) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   async function fetchUrl() {
//     const response = await fetch(url);
//     const json = await response.json();
//     setData(json);
//     setLoading(false);
//   }
//   useEffect(() => {
//     fetchUrl();
//   }, [url]);

//   return [data, loading];
// }
export default useFetch;
