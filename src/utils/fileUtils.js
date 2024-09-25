export const downloadFile = async (title, date) => {
    const regDate = date.reg_date.replaceAll(".", "-");
    fetch(date.url, { method: "GET" })
        .then((res) => {
            return res.blob();
        })
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${title} ${regDate}`;
            document.body.appendChild(a);
            a.click();
            setTimeout((_) => {
                window.URL.revokeObjectURL(url);
            }, 60000);
            a.remove();
        })
        .catch((err) => {
            // console.error("err: ", err);
        });
};
