import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import InfoCard from "../InfoCard";
import { useFetch } from "../../hooks/useFetch";
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const StyledTypography = styled(Typography)(() => ({
	fontSize: '16px',
	fontWeight: '600',
	lineHeight: '20px ',
})) as typeof Typography;

interface IProps {
	searchInput: string
}

const CardGrid: React.FC<IProps> = (props) => {
	const { data: dataForTitle, loading, error } = useFetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=15&title_contains=${props.searchInput}`)
	const { data: dataForSummary } = useFetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=15&summary_contains=${props.searchInput}`)

	// const data = dataForTitle?.length != 0 ? dataForTitle : dataForSummary;
	const data = {
		...dataForSummary,
		...dataForTitle,
	}


	return (
		<>
			<StyledTypography
				sx={{ marginTop: '40px', marginBottom: '5px' }}
				component='h2'
				variant='h6'>
				Results: {Object.keys(data).length}
			</StyledTypography>
			<Divider />
			<div style={{ marginTop: '45px' }}>
				{loading && <p>Loading...</p>}
				{error && <p>Something went wrong {error}</p>}
				{data &&
					<Grid container spacing={2}>
						{Object.keys(data).map((key, index) => {
							const newsData = data[key]
							return (
								<Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
									<InfoCard data={newsData} searchInput={props.searchInput} />
								</Grid>
							)
						})}
					</Grid>}

			</div>
		</>

	)
};

export default CardGrid;
