import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPizzaBlock = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="223" rx="8" ry="8" width="248" height="20" />
        <circle cx="121" cy="107" r="100" />
        <rect x="1" y="260" rx="11" ry="11" width="248" height="65" />
        <rect x="2" y="341" rx="9" ry="9" width="97" height="30" />
        <rect x="135" y="338" rx="20" ry="20" width="111" height="45" />
    </ContentLoader>
)

export default SkeletonPizzaBlock

