import Button from "../../../components/Buttons/Button";
import TextArea from "../../../components/Input/TextField";

const Description = ({ value, setValue, onSuccess, joinHandler }) => {
    const joinConfirm = async () => {
        // const response = await postConfirmEmail({ auth_id: authId, auth_code: authCode });
        // if (response.result === "Y") {
        // setIsError(true);
        joinHandler();
        // } else {
        // setIsError(true);
        // }
    };
    return (
        <>
            <TextArea
                placeholder="description(optional)"
                value={value}
                setValue={(value) => {
                    setValue("description", value);
                }}
            />
            <Button onClick={joinConfirm} className={"join-btn"}>
                Join
            </Button>
        </>
    );
};

export default Description;
