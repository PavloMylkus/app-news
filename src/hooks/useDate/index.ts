
export const useDate = (date: string) => {

	const publishedDate = new Date(date).toLocaleDateString('en-us', { month: "long", day: "numeric", year: "numeric" }).split(',')

	function formatDate() {

		if (publishedDate[0].split(' ')[1] === '1') {
			publishedDate[0] += 'st,';
		} else if (publishedDate[0].split(' ')[1] === '2') {
			publishedDate[0] += 'nd,';
		} else {
			publishedDate[0] += 'th,';
		}
		return publishedDate.join(' ')
	}
	formatDate()

	return { formatDate, publishedDate }
}