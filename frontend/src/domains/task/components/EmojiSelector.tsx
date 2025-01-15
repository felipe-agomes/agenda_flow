import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
import { MdDescription } from "react-icons/md";

type EmojiSelectorProp = {
  onChange: (inputValue: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EmojiSelector({ onChange }: EmojiSelectorProp) {
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (e?: EmojiClickData) => {
    
    togglePicker();
  };

  const togglePicker = () => setShowPicker(!showPicker);

  return (
    <>
      <button type="button" onClick={togglePicker}>EMOJI</button>
      <div>
        <EmojiPicker open={showPicker} onEmojiClick={handleEmojiClick} />
      </div>
    </>
  );
}