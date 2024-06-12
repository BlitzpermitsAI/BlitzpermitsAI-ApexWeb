import React, { useState } from "react";
function Promptinput() {
  return (
    <div className="prompt-container" onKeyDown={handleEnterKey}>
      <input
        type="text"
        className="prompt-input"
        placeholder="Enter a prompt here"
        value={promptValue}
        onChange={handleChange}
      />
      <div className="input-icons">
        <input type="file" id="file-input" class="file-input" />

        <label for="file-input" class="file-input-label">
          <img src={upload} alt="Image Icon" className="icon-button" />
        </label>

        <button className="icon-button">
          <img src={Microphone} alt="Mic Icon" height={40} width={40} />

          {promptValue.length > 0 ? (
            <img
              src={send}
              alt="Mic Icon"
              height={40}
              width={40}
              onClick={handleSubmit}
            />
          ) : (
            ""
          )}
        </button>
      </div>
    </div>
  );
}
export default Promptinput;
