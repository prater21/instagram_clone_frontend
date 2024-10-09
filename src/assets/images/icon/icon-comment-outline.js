

const IconCommentOutline = ({ onClick, color = "#ffffff", width = 24, height = 24 }) => {
    return (
        <svg onClick={onClick} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <path d="M26 3H6a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h15.94a1 1 0 0 1 .69.27l4.78 3.53a1 1 0 0 0 .59.2 1 1 0 0 0 .45-.11A1 1 0 0 0 29 28V6a3 3 0 0 0-3-3Zm1 23-3.14-2.3a3 3 0 0 0-1.92-.7H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1Z" fill={color} className="fill-231f20">
            </path>
        </svg>


    );
};

export default IconCommentOutline
