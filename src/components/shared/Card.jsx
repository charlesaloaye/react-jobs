const Card = ({ bgColor, btnColor, children }) => {
    return (
        <div className={`p-6 ${bgColor} rounded-lg shadow-md`}>
            {children}
        </div>
    )
}

export default Card
