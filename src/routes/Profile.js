import React, { useEffect, useState } from "react";
import { authService, dbService } from "fbase";
import { useHistory } from "react-router";

export default ({ userObj }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut()
        history.push("/");
    };

    const getMyNweets = async () => {
        const nweets = await dbService
            .collection("nweets")
            .where("creatorId", "==", userObj.uid) // where - 필터링하는 방법을 알려줌
            .orderBy("createdAt")
            .get();
        console.log(nweets.docs.map((doc) => doc.data()));
    };

    useEffect(() => {
        getMyNweets();
    }, [])

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) { // 변경 x상태에서 누르면 업데이트x
            const response = await userObj.updateProfile({
                displayName: newDisplayName,
            });
        }
    };

    return (
        <>
            <div>
                <h5> 이번주 로또 1등 번호는
                    <br />{lotto + " "}로!!!! 1등 ㄱㄱ!!!!
                </h5>
            </div>

            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};



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