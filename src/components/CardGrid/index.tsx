import { useState, useEffect } from "react"
import Grid from '@mui/material/Grid';
import InfoCard from "../InfoCard";

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



	return (
		<div style={{ marginTop: '45px' }}>
			{loading && <p>Loading...</p>}
			{data &&
				<Grid container spacing={2}>
					{Object.keys(data).map((key, index) => {
						const newsData = data[key]
						return (
							<Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
								<InfoCard data={newsData} />
							</Grid>
						)
					})}
				</Grid>}

		</div>
	)
};

export default CardGrid;
