const Audio: React.FC<{}> = ({}) => {
  return (
    <audio loop id="audioPlayer" autoPlay style={{ display: "none" }}>
      <source src="sound/preloader.mp3" type="audio/mp3" />
    </audio>
  );
};

export default Audio;
