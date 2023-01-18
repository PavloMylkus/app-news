import { useState, useEffect } from "react"

export const useFetch = (url: string) => {

	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		await fetch(url)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw response
			}).then(data => {
				setData(data)
			}).catch(error => {
				console.log('fetch error :', error)
				setError(error)
			}).finally(() => {
				setLoading(false)
			})
	}
	return { data, loading, error }
}