import React, { useRef, useEffect, useState } from 'react'

export default function Button(props) {


	const ref = useRef(null)


	const [minHeight, set_minHeight] = useState(0)
	useEffect(() => {
		set_minHeight(ref.current ? ref.current.offsetWidth : 0)

	}, [ref.current, props.children]);


	return (
		<button ref={ref}
			style={{ minHeight: minHeight }}
			className='button primary'
			onClick={props.onClick}
			type={props.type}

		>
			{props.children}
		</button>)
}
