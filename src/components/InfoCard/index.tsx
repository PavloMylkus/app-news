import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useDate } from '../../hooks/useDate';
import { Link } from 'react-router-dom';
import IArtice from '../../models';


const InfoCard: React.FC<IArtice> = (data: IArtice) => {

	const { publishedDate } = useDate(data.data.publishedAt)

	return (
		<Card sx={{ maxWidth: 400 }}>
			<Link to={'article/' + data.data.id}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="217"
						image={data.data.imageUrl}
						alt="green iguana"
					/>
					<CardContent>
						<Typography sx={{ display: 'flex', alignItems: 'center', opacity: '0.6' }} gutterBottom variant="subtitle2" component="div">
							<CalendarMonthIcon sx={{ marginRight: 1 }} fontSize='small' />
							{publishedDate}
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{data.data.title}
						</Typography>
						<Typography variant="body2" >
							{data.data.summary.length > 100 ? `${data.data.summary.slice(0, 100)}...` : data.data.summary}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>
			<CardActions >
				<Link to={'article/' + data.data.id}>
					<Button color='primary'>
						<Typography sx={{ fontWeight: "700" }} variant="subtitle1">
							Read more
						</Typography>
						<ArrowForwardIcon />
					</Button>
				</Link>
			</CardActions>
		</Card>
	)
};

export default InfoCard;
