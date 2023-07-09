import React, { useContext, useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { SocketContext } from "../SocketContext";

const submitHandler = (e) => {
  e.preventDefault()
}
const Options = ({ children }) => {
  const context = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div>
      <div>
        <form noValidate onSubmit={submitHandler} autoComplete='off'>
          <div>
            <div>
              <h6>Account Info</h6>
              <input type="text" name='Name' value={context.name} onChange={(e) => { context.setName(e.target.value) }} />
              <CopyToClipboard text={context.me}>
                <button>
                  Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
            <div>
              <h6>Make a call</h6>
              <input type="text" name='ID to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
              {context.callAccepted && !context.callEnded ? (
                <button onClick={context.leaveCall}>
                  Hang Up
                </button>
              ) : (
                <button onClick={() => context.callUser(idToCall)}>
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  )
}

export default Options
