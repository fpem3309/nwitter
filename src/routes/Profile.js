import React from "react";
import { authService } from "fbase";
import { useHistory } from "react-router";

export default () => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut()
        history.push("/");
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

    return (
        <>
            <div>
                <h5> 이번주 로또 1등 번호는
                    <br />{lotto + " "}로!!!! 1등 가즈아~~~!!!!
                </h5>
            </div>

            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};