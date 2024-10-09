


const IconClose = ({ onClick, color = "#ffffff", width = 22, height = 22 }) => {
    return (
        <svg onClick={onClick} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <path d="m7 7 18 18M7 25 25 7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" className="stroke-000000">

            </path>
        </svg>
    );
};

export default IconClose