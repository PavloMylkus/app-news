import React from "react"
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { lorem } from "./lofemIpsum";

const Article: React.FC = () => {
	const { id } = useParams()
	const { data, loading, error } = useFetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)

	return (
		<>
			{data && <Box sx={{
				width: '100%',
				height: '245px',
				background: `url(${data.imageUrl})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'absolute',
				zIndex: '-1'
			}} />}
			<Container sx={{ paddingTop: { xl: '140px', lg: '120px', md: '70px', sm: '55px', xs: '25px' } }} maxWidth="lg">
				<Box
					sx={{
						background: '#fff',
						maxWidth: '1290px',
						margin: '0 auto',
						padding: '50px 75px',
						border: '1px solid #EAEAEA',
						borderRadius: '5px',
						boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)'
					}}>
					{loading && <p>Loading...</p>}
					{error && <p>Something went wrong {error}</p>}
					{data && <>
						<Typography
							sx={{
								fontSize: '24px',
								textAlign: 'center',
								paddingBottom: '45px'
							}}
							variant="h6"
							component='h1'>
							{data.title}
						</Typography>
						<Typography
							sx={{ fontSize: '18px' }}
							variant="body2"
							component='span'>
							{data.summary}
							{lorem.ipsum1}<br /><br />
							{lorem.ipsum2}<br /><br />
							{lorem.ipsum3}
						</Typography>
					</>
					}
				</Box>
				<Link to='/' >
					<Typography
						sx={{
							p: '35px 75px',
							display: 'flex',
							alignItems: 'center',
							fontSize: '16px',
							fontWeight: '700'
						}}
						variant="subtitle1"
						component='span'
					>
						<ArrowBackIcon />
						Back to homepage
					</Typography>

				</Link>
			</Container >
		</>
	)
};

export default Article;
