import Grid from '@mui/material/Grid';
import InfoCard from "../InfoCard";
import { useFetch } from "../../hooks/useFetch";

const CardGrid: React.FC = () => {
	const { data, loading, error } = useFetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=15')

	return (
		<div style={{ marginTop: '45px' }}>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong {error}</p>}
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
