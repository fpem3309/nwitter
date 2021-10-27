import Nweet from "components/Nweet";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
    //console.log(userObj);
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState();

    //---------------------로또-----------------------

    var lotto = [];

    for (var i = 0; i < 6; i++) {
        var lotto_num = Math.floor(Math.random() * 44) + 1;

        for (var j in lotto) {
            if (lotto_num === lotto[j]) {
                lotto_num = Math.floor(Math.random() * 44) + 1;
            }
        }
        lotto.push(lotto_num); // push - 배열의 마지막에 값 추가 메소드
    }

    // 오름차순으로 숫자 정렬
    lotto.sort(function (a, b) {
        return a - b;
    })

    //--------------------로또 끝---------------------

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
        const theFile = files[0]; // file을 갖고 ( 첫 번째 하나ㅏㄴ)
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
        <div>
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
            <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>

            <div>
                <h5> 이번주 로또 1등 번호는
                    <br />{lotto + " "}로 사보시죠!!!!</h5>
            </div>

        </div>

    );
};
export default Home;