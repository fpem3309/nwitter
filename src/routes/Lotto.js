import React from "react";

const Lotto = () => {
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

    return (
        <div>
            <h5>
                {lotto + " "}
            </h5>
        </div>
    );
}
export default Lotto;