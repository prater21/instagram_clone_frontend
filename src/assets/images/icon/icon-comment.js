


const IconComment = ({ onClick, color = "#ffffff", width = 22, height = 22 }) => {
    return (
        <svg onClick={onClick} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <path d="M43.98 8c0-2.21-1.77-4-3.98-4H8C5.79 4 4 5.79 4 8v24c0 2.21 1.79 4 4 4h28l8 8-.02-36z" fill={color} class="fill-000000">            </path>
            <path d="M0 0h48v48H0z" fill="none"></path>
        </svg>
    );
};

export default IconComment