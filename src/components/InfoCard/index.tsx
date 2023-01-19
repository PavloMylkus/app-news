import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useDate } from '../../hooks/useDate';

const InfoCard: React.FC<any> = ({ data }) => {
	const { publishedDate } = useDate(data.publishedAt)

	return (
		<Card sx={{ maxWidth: 400 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="217"
					image={data.imageUrl}
					alt="green iguana"
				/>
				<CardContent>

					<Typography sx={{ display: 'flex', alignItems: 'center', opacity: '0.6' }} gutterBottom variant="subtitle2" component="div">
						<CalendarMonthIcon sx={{ marginRight: 1 }} fontSize='small' />
						{publishedDate}
					</Typography>
					<Typography gutterBottom variant="h5" component="div">
						{data.title}
					</Typography>
					<Typography variant="body2" >
						{data.summary.length > 100 ? `${data.summary.slice(0, 100)}...` : data.summary}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions >
				<Button color='primary'>
					<Typography sx={{ fontWeight: "700" }} variant="subtitle1">
						Read more
					</Typography>
					<ArrowForwardIcon />
				</Button>

			</CardActions>
		</Card>
	)
};

export default InfoCard;
