import { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardGrid from "../../components/CardGrid";
import SearchForm from "../../components/SearchForm";

const Home: React.FC = () => {
	const [searchInput, setSearchInput] = useState<string>("");


	return (
		<>
			<Container sx={{ paddingTop: { xl: '50px', lg: '30px', md: '15px', sm: '15px', xs: '15px' } }} maxWidth="xl">
				<Box sx={{ maxWidth: '1290px', margin: '0 auto' }}>
					<SearchForm searchInput={searchInput} setSearchInput={setSearchInput} />
					<CardGrid searchInput={searchInput} />
				</Box>
			</Container >

		</>
	)
};

export default Home;
