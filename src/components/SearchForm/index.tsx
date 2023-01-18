import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from "@mui/material/FormControl";

const SearchForm = () => {
	return (
		<>
			<Typography
				sx={{
					fontSize: '16px',
					fontWeight: '600',
					lineHeight: '20px '
				}}
				component='h1'
				variant='h6'>
				Filter by keywords
			</Typography>
			<FormControl
				sx={{
					border: '1px solid #EAEAEA',
					p: "2px 4px",
					display: "flex",
					alignItems: "center",
					flexDirection: 'row',
					width: 600
				}}
			>
				<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
					<SearchIcon />
				</IconButton>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="The most successful IT companies in 2020"
				/>
			</FormControl>
		</>

	)
};

export default SearchForm;
