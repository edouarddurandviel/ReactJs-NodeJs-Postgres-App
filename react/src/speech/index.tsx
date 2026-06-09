// convert some text to audio choosing lang
///////////////////////////////////////////
export const handleSubmitSpeechUterance = async (textInput: string | boolean) => {
  const synth = window.speechSynthesis;
  synth.cancel();
  const voices = speechSynthesis.getVoices();
  const defaultLangage = voices.length && voices.find((v) => v.lang === "en-US");

  if (textInput && typeof textInput === "string") {
    const utter = new SpeechSynthesisUtterance(textInput);
    if (defaultLangage) {
      utter.voice = (await defaultLangage) || null;
      synth.speak(utter);
    }
  }
};
