import React, { useEffect, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import Trending from './component'
import { fetchTrending } from '../services'
import { reducer } from './reducer'
import { setTrending, setTrailer, setBackground } from './actions'

import { SLIDER_SETTINGS } from './constants'
import IosArrowBack from 'react-ionicons/lib/IosArrowBack'
import IosArrowForward from 'react-ionicons/lib/IosArrowForward'

import { getMovie } from '../../../utils/helpers'

import { setLoading } from '../../../redux/loading/action'

import { MOVIE } from '../../../shared/constants'

const TrendingContainer = () => {
	const [state, dispatchAction] = useReducer(reducer, {})
	const dispatch = useDispatch()

	useEffect(() => {
		getTrending()
		// eslint-disable-next-line
	}, [])

	const getTrending = async () => {
		dispatch(setLoading(true))
		const trendingList = await fetchTrending()
		Promise.all(
			trendingList.map(async (movie) => {
				const movieData = await getMovie(MOVIE.type, movie.id)
				return {
					id: movie.id,
					title: movie.title,
					genres: [{ name: 'test' }],
					rating: movie.vote_average,
					releaseDate: movie.release_date,
					poster: movie.poster_path,
					...movieData,
				}
			})
		)
			.then((response) => response.filter((movie) => movie.videos.find(video => video.type === "Trailer")))
			.then((response) => response.sort((a, b) => b.rating - a.rating))
			.then((response) => {
				dispatchAction(setTrending(response))
				dispatchAction(setBackground(response[0].image))
			})
			.then(() => dispatch(setLoading(false)))
	}

	const setTrailerHandler = (key) => {
		dispatchAction(setTrailer(key))
	}

	function PrevArrow(props) {
		const { onClick } = props
		return (
			<button onClick={onClick} className="slick-arrow slick-prev">
				<IosArrowBack fontSize="60px" />
			</button>
		)
	}

	function NextArrow(props) {
		const { onClick } = props
		return (
			<button onClick={onClick} className="slick-arrow slick-next">
				<IosArrowForward fontSize="60px" />
			</button>
		)
	}
	const sliderSettings = {
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		afterChange: (index) => {
			const currentImage = state.trending[index].image
			return dispatchAction(setBackground(currentImage))
		},
		...SLIDER_SETTINGS,
	}

	return (
		<Trending
			trending={state.trending}
			trailer={state.trailer}
			setTrailer={setTrailerHandler}
			image={state.image}
			sliderSettings={sliderSettings}
		/>
	)
}

export default TrendingContainer
