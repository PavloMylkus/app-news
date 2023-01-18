import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import SearchForm from './components/SearchForm';


function App() {
	return (
		<Container sx={{ paddingTop: { xl: '50px', lg: '30px', md: '15px', sm: '15px', xs: '15px' } }} maxWidth="xl">
			<Box sx={{ maxWidth: '1290px', margin: '0 auto' }}>
				<SearchForm />
			</Box>
		</Container>
	);
}

export default App;
