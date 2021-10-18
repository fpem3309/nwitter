import Nweet from "components/Nweet";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
    //console.log(userObj);
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    useEffect(() => { // component가 mount될때
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const nweetsArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNweets(nweetsArray);
        });
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setNweet("");
    };
    const onChange = (event) => {
        const { target: { value }, } = event;    // event안의 target안의 value추출
        setNweet(value);
    };
    const onFileChange = (event) => {
        const { target: { files }, } = event; //event안에서 target안으로 가서 files를 받아옴
        const theFile = files[0]; // file을 갖고
        const reader = new FileReader(); // reader를 만든 다음
        reader.onloadend = (finishedEvent) => {
            console.log(finishedEvent);
        };
        reader.readAsDataURL(theFile); // 파일을 읽음
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
                <input type="file" accept="image/*" onChange={onFileChange} />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    );
};
export default Home;