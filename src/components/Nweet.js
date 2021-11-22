import { dbService, storageService } from 'fbase';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);  // true  false로 edit모드인지 확인
    const [newNweet, setNewNweet] = useState(nweetObj.text);  // input에 입력된 text 업데이트

    const onDeleteClick = async () => {
        const ok = window.confirm("ㄹㅇ 삭제??");
        console.log(ok)
        if (ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete(); // documentPath = 위치
            await storageService.refFromURL(nweetObj.attachmentUrl).delete(); // 사진 삭제
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(nweetObj, newNweet);
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet,
        });
        setEditing(false); // submit하면 edit모드 끄기
    };
    const onChange = (event) => {
        const { target: { value },
        } = event;
        setNewNweet(value);
    };
    return (
        <div className="nweet">
            {editing ? (
                <>
                    <form onSubmit={onSubmit} className="container nweetEdit">
                        <input type="text"
                            onChange={onChange}
                            placeholder="Edit your nweet"
                            value={newNweet}
                            required
                            autoFocus
                            className="formInput" />
                        <input type="submit" value="Upadte Nweet" className="formBtn" />
                    </form>
                    <span onClick={toggleEditing} className="formBtn cancelBtn">
                        Cancel
                    </span>
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    <h4>{nweetObj.createdAt}</h4>
                    <h4>{nweetObj.creatorId}</h4>
                    {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} />}
                    {isOwner && (
                        <div class="nweet__actions">
                            <span onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </span>
                            <span onClick={onDeleteClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Nweet;