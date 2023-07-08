const VideoCard = ({info}) => {
    // console.log(info);
    const { snippet , statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const { likeCount, viewCount } = statistics;


    return(
        <div className="p-2 mx-5 my-2 w-80 shadow-md">
            <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{likeCount}-👍</li>
                <li>{viewCount}-views</li>
            </ul>
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