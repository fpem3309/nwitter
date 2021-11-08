import { dbService, storageService } from "fbase";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Nweet from "./Nweet";

const NweetFactory = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
            const attachmentRef = storageService
                .ref()
                .child(`${userObj.uid}/${uuidv4()}`); //이미지의 path, child를 가짐(파일에 대한 reference)
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        const nweetObj = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
        };
        await dbService.collection("nweets").add(nweetObj);
        setNweet("");
        setAttachment("");
    };

    const onChange = (event) => {
        const { target: { value }, } = event;    // event안의 target안의 value추출
        setNweet(value);
    };

    const onFileChange = (event) => {
        const { target: { files }, } = event; //event안에서 target안으로 가서 files를 받아옴
        const theFile = files[0]; // file을 갖고 ( 첫 번째 하나만)
        const reader = new FileReader(); // reader를 만든 다음
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent
            setAttachment(result);
        };
        reader.readAsDataURL(theFile); // 파일을 읽음
    };

    const onClearAttachment = () => setAttachment(null);

    return (
        <form onSubmit={onSubmit}>
            <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
            <input type="file" accept="image/*" onChange={onFileChange} />
            <input type="submit" value="Nweet" />
            {attachment && (
                <div>
                    <img src={attachment} width="50px" height="50px" />
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}
        </form>
    )
}

export default NweetFactory;