import React from 'react';
import {useDispatch} from "react-redux";
import {push} from 'connected-react-router';
import {signINAction} from "../reducks/users/actions";

const Login = () => {
    const dispatch = useDispatch();


    return(
        <div>
            <h2>ログイン</h2>
            <button onClick={()=> {
                dispatch(signINAction({uid: "0001",username:"torahack"}))
                dispatch(push('/'))
            }}>
              ログインする
            </button>
        </div>
    )


}
export default Login