function Detail(props) {
    const display = props.display;

    return (
        <div className={`absolute ${display ? "hidden" : "block"} z-10`}>
            <div className="w-24 h-24 bg-black rounded-lg"></div>
        </div>
    )
}

export default Detail