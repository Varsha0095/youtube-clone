const VideoCard = ({info}) => {
    console.log(info);
    const { snippet , statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const { likeCount, viewCount } = statistics;


    return(
        <div className="p-2 mx-5 my-2 w-80 rounded-lg">
            <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
            <div className="flex">
                <img className="h-14 w-10 object-cover py-2 m-2 rounded-full" alt="channel-icon" src={thumbnails.default.url} />
            
            <ul className="font-sans">
                <li className="font-semibold py-2">{title}</li>
                <li className="text-gray-600">{channelTitle}</li>
                <div className="flex">
                <li className="text-gray-600">{likeCount}-👍</li>
                <li className="text-gray-600">{viewCount}-views</li>
                </div>
            </ul>
            </div>
        </div>
    )
}

export const AdVideoCard = ({info}) => {
    return (
        <div className="p-1 m-1 border border-green-950">
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard;