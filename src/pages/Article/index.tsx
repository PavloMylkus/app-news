import React from "react"
import { useParams } from "react-router-dom";

const Article: React.FC = (props) => {
	const { id } = useParams()
	return (
		<div>
			Article {id}
		</div>
	)
};

export default Article;
