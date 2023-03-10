import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from "@mui/material/FormControl";

const SearchInput = styled(FormControl)(() => ({
	border: '1px solid #EAEAEA',
	p: "2px 4px",
	display: "flex",
	alignItems: "center",
	flexDirection: 'row',
	width: 600,
	boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
	borderRadius: '5px',
	marginTop: '10px'
})) as typeof FormControl;

const StyledTypography = styled(Typography)(() => ({
	fontSize: '16px',
	fontWeight: '600',
	lineHeight: '20px ',
})) as typeof Typography;

interface ISetInput {
	(searchInput: string): void;
}
interface IProps {
	searchInput: string
	setSearchInput: ISetInput
}

const SearchForm: React.FC<IProps> = ({ searchInput, setSearchInput }) => {

	const onChangeValue = (e: any) => {
		setSearchInput(e.target.value)
	}
	const onChangeSubmit = (e: any) => {
		e.preventDefault()
	}

	const result = 6;

	return (
		<>
			<StyledTypography
				component='h1'
				variant='h6'>
				Filter by keywords
			</StyledTypography>
			<SearchInput onSubmit={onChangeSubmit} component='form'>
				<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
					<SearchIcon />
				</IconButton>
				<InputBase
					value={searchInput}
					onChange={onChangeValue}
					sx={{ ml: 1, flex: 1 }}
					placeholder="Search"
				/>
			</SearchInput>

		</>

	)
};

export default SearchForm;
