import React, { useEffect, useState } from 'react'
import Movie from './component'
import { useParams } from 'react-router-dom'
import { getMovie } from '../../utils/helpers'
import Loader from '../../shared/components/Loader'
import MdStar from 'react-ionicons/lib/MdStar'
import MdStarOutline from 'react-ionicons/lib/MdStarOutline'

const MovieContainer = ({ type }) => {
	const { id } = useParams()
	const [movieData, setMovieData] = useState(null)
	const [rating, setRating] = useState(null)
	const [hovered, setHovered] = useState(null)

	useEffect(() => {
		getMovieHandler(type, id)
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		renderRatingButtons(rating)
	}, [rating])

	const getMovieHandler = async (type, id) => {
		await getMovie(type, id).then((response) => {
			const trailer = response.videos.find((video) => video.type === 'Trailer')
			setMovieData({ trailer, ...response })
		})
	}

	const renderRatingButtons = () => {
		const ratingButtons = []
		for (let i = 0; i < 10; i++) {
			ratingButtons.push(
				<button
					key={i}
					aria-label={`Rate ${i + 1}`}
					onClick={() => {
						setRating(i + 1)
					}}
					onMouseEnter={() => setHovered(i + 1)}
					onMouseLeave={() => setHovered(null)}
				>
					{hovered ? i + 1 <= hovered ? <MdStar /> : <MdStarOutline /> : rating && i < rating ? <MdStar /> : <MdStarOutline />}
				</button>
			)
		}
		return ratingButtons
	}

	if (!movieData) {
		return <Loader />
	}
	return <Movie movie={movieData} renderRatingButtons={renderRatingButtons} />
}

export default MovieContainer
