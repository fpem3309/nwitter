import { dbService } from 'fbase';
import React, { useState } from 'react';

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);  // true  false로 edit모드인지 확인
    const [newNweet, setNewNweet] = useState(nweetObj.text);  // input에 입력된 text 업데이트
    const onDeleteClick = async () => {
        const ok = window.confirm("정말 삭제하시겠슴둥?");
        console.log(ok)
        if (ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete(); // documentPath = 위치
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
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input type="text" onChange={onChange} placeholder="Edit your nweet" value={newNweet} required />
                        <input type="submit" value="Upadte Nweet" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Delete Nweet</button>
                            <button onClick={toggleEditing}>Edit Nweet</button>
                        </>
                    )}
                </>
            )}
        </div>
    );

}

export default Nweet;