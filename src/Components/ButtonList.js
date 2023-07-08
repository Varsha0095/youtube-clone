import Button from "./Buttons";

const list = ["All", "Music", "Live", "Movies", "News", "Songs", "Mixes", "Recepies", "Devotional", "Cooking"]

const ButtonList = () => {
    return(
        <div className="flex">
           {list.map((genre,index) => <Button key={index} name={genre} />)}
        </div>
    )
}

export default ButtonList;