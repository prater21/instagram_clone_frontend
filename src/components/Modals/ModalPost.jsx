import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.css";
import IconPrev from "../../assets/images/icon/icon-prev";
import { IconImg } from "../../constants/icons";
import SwiperPost from "../Swiper/SwiperPost";
// import IconImg from "../../assets/images/icon/icon-img.jsvg";
import imgSrc from "../../assets/images/intro-img-2.png";
import TextArea from "../Input/TextField";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        right: "auto",
        padding: "0",
        width: "100%",
        maxWidth: "450px",
        height: "495px",
        border: "none",
        maxHeight: "670px",
        borderRadius: "12px",
    },
};

const Step1 = ({ getImgs }) => {
    const getProfileImg = async (e) => {
        console.log(e);
        // const file = Array.from(e.target.files);
        const file = e.target.files;
        let imgList = [];

        for (let i = 0; i < file.length; i++) {
            const currentImageUrl = URL.createObjectURL(file[i]);
            imgList.push(currentImageUrl);
        }

        if (imgList.length > 4) {
            alert("A maximum of 4 images can be uploaded.");
            return;
        }

        //  setShowImages(imageUrlLists);
        // if (file.length > 0) {
        //     console.log(file);

        //     //for send img data to backend
        //     // setProfileChanged(true);
        //     // setIsDirt(true);
        //     // const formData = new FormData();
        //     // formData.append("file", file);
        //     // setImgData(formData);
        //     const imgList = [];
        //     await file.map((img) => {
        //         //for show img to user
        //         const reader = new FileReader();
        //         reader.readAsDataURL(img);
        //         reader.onloadend = () => {
        //             console.log("reader.result)", reader.result);
        //             imgList.push(reader.result);
        //         };
        //     });
        getImgs(imgList);
        // }
    };
    return (
        <div className="modal-post-step1">
            <div className="modal-post-photos-icon">
                <IconImg className="left" />
                <IconImg className="right" />
            </div>
            <div className="modal-post-add-photos">
                <label htmlFor="photo">Add Photos</label>
                <input multiple type="file" accept="image/*" id="photo" onChange={getProfileImg} />
            </div>
        </div>
    );
};

const Step2 = ({ imgs }) => {
    return (
        <div className="modal-post-step2">
            <SwiperPost imgs={imgs} border={false} />
        </div>
    );
};

const Step3 = ({ captions, getCaptions }) => {
    return (
        <div className="modal-post-step3">
            <div className="modal-post-step3-profile">
                <img src={imgSrc} alt="modal-post-profile-img" />
                <p>prater21</p>
            </div>
            <div className="modal-post-step3-body">
                <TextArea value={captions} setValue={getCaptions} maxLength={2000} theme="dark" />
            </div>
            <p className="modal-post-step3-cnt">{captions?.length} / 2000</p>
        </div>
    );
};

const ModalPost = (props) => {
    const { closeModal, isOpen } = props;
    const [steps, setSteps] = useState(1);
    const [imgs, setImgs] = useState([]);
    const [captions, setCaptions] = useState("");

    const getImgs = async (imgs) => {
        setImgs(imgs);
        setSteps(2);
    };

    const getCaptions = (value) => {
        setCaptions(value);
    };

    const STEPS = {
        1: <Step1 getImgs={getImgs} />,
        2: <Step2 imgs={imgs} />,
        3: <Step3 captions={captions} getCaptions={getCaptions} />,
    };

    return (
        <Modal {...props} isOpen={isOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={true} style={customStyles} ariaHideApp={false}>
            <div className="modal-post">
                <div className="modal-post-header">
                    {steps !== 1 ? (
                        <IconPrev
                            className="icon"
                            onClick={() => {
                                setSteps((prev) => prev - 1);
                            }}
                        />
                    ) : (
                        ""
                    )}
                    <p className="modal-post-title">Create New Post</p>
                    {steps !== 1 ? (
                        steps === 3 ? (
                            <p
                                className="next"
                                onClick={() => {
                                    alert("share post successful");
                                    closeModal();
                                    // share post
                                    // setSteps((prev) => prev + 1);
                                }}
                            >
                                Share
                            </p>
                        ) : (
                            <p
                                className="next"
                                onClick={() => {
                                    setSteps((prev) => prev + 1);
                                }}
                            >
                                Next
                            </p>
                        )
                    ) : (
                        ""
                    )}
                </div>
                {STEPS[steps]}
            </div>
        </Modal>
    );
};

export default ModalPost;
