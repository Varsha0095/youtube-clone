const Button = ({name}) => {
    return(
        <div className="px-5 py-1 m-2 bg-gray-200 rounded-lg hover:bg-gray-300 active:bg-black active:text-white">{name}</div>
    )
}

export default Button;