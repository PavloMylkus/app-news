import { useState } from 'react'


export const useSearch = () => {
	const [q, setQ] = useState("");
	const [searchParam] = useState(["names", "description"]);

	function search(data: any) {
		return data.filter((item: any) => {
			return searchParam.some((newItem) => {
				return (
					item[newItem]
						.toString()
						.toLowerCase()
						.indexOf(q.toLowerCase()) > -1
				);
			});
		});
	}
	return { q, setQ, search }
}