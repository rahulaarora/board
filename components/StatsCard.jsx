const StatsCard = (props) => {

    let color = props.color

    if(color === undefined) color = "blue"

    if(color == "green") color = "bg-[#DDEFE0]"
    if(color == "peach") color = "bg-[#F4ECDD]"
    if(color == "pink") color = "bg-[#EFDADA]"
    if(color == "purple") color = "bg-[#DEE0EF]"

    const icon = props.icon
    return (
        <div className="total-revenues">
            <div className={`overlap-2 ${color}`}>
                <div className="text-wrapper-4">{props.heading}</div>
                <div className="text-wrapper-5">{props.stat}</div>
                <img
                    className="vector"
                    alt="Vector"
                    src={icon}
                />
            </div>
        </div>
    );
}

export default StatsCard;