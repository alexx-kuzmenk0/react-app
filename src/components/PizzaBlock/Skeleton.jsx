import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
	<ContentLoader
		speed={2}
		width={284}
		height={380}
		viewBox="0 0 284 380"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="-3" y="181" rx="6" ry="6" width="280" height="27" />
		<rect x="1" y="229" rx="13" ry="13" width="280" height="88" />
		<rect x="100" y="332" rx="0" ry="0" width="5" height="0" />
		<rect x="1" y="346" rx="13" ry="13" width="94" height="27" />
		<rect x="132" y="334" rx="20" ry="20" width="151" height="43" />
		<rect x="220" y="345" rx="0" ry="0" width="1" height="5" />
		<circle cx="135" cy="84" r="80" />
		<circle cx="448" cy="138" r="19" />
	</ContentLoader>
)
export default Skeleton


