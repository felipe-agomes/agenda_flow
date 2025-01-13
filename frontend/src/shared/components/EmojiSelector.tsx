import EmojiPicker from "emoji-picker-react";

export default function EmojiSelector() {
  const handleEmojiClick = () => {
    // setShowPicker(false);
  };

  return (

      <div style={{ position: "absolute", top: "50px", zIndex: 100 }}>
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </div>
  );
}