import React from "react";

const Board = () => {

    const boardInfo = () => console.log("click!!");

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <span onClick={boardInfo}>
                                첫번째 게시글입니다.
                            </span>
                        </td>
                        <td>2020-10-25</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Board;