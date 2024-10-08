

const IconPrev = ({ onClick, color = "#ffffff", width = 18, height = 18, className }) => {
    return (
        <svg onClick={onClick} className={className} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <path d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z" fill={color} />
        </svg>
    );
};

export default IconPrev