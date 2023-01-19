import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from './pages/Article';
import Home from "./pages/Home";

function App() {
	return (
		<Container sx={{ paddingTop: { xl: '50px', lg: '30px', md: '15px', sm: '15px', xs: '15px' } }} maxWidth="xl">
			<Box sx={{ maxWidth: '1290px', margin: '0 auto' }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="article/:id" element={<Article />} />
					</Routes>
				</BrowserRouter>
			</Box>
		</Container >
	);
}

export default App;
