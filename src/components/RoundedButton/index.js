import React, { useRef, useEffect, useState } from 'react'

export default function Button(props) {
	const { fixedRadius } = props


	const ref = useRef(null)


	const [minHeight, set_minHeight] = useState(0)
	useEffect(() => {
		if (fixedRadius) {
			set_minHeight(fixedRadius)
		} else {

			set_minHeight(ref.current ? ref.current.offsetWidth : 0)
		}


	}, [ref.current, props.children]);
	const style = fixedRadius ? {
		height: minHeight,
		width: minHeight
	} : {
			minHeight: minHeight

		}

	return (
		<button ref={ref}
			style={style}
			className='button primary'
			onClick={props.onClick}
			type={props.type}

		>
			{props.children}
		</button>)
}
