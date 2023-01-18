import React, { useState, useEffect } from "react"

const CardGrid = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		await fetch('https://api.spaceflightnewsapi.net/v3/articles')
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw response
			}).then(data => {
				setData(data)
			}).catch(error => {
				console.log('fetch error :', error)
				setError(error)
			}).finally(() => {
				setLoading(false)
			})
	}
	console.log(data);

	return (
		<div>
			{loading && <p>Loading...</p>}
		</div>
	)
};

export default CardGrid;
