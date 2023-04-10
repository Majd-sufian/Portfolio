interface AudioProps {}

const Audio: React.FC<AudioProps> = ({}) => {
  return (
    <audio loop id="audioPlayer" autoPlay style={{ display: "none" }}>
      <source src="sound/preloader.mp3" type="audio/mp3" />
    </audio>
  );
};

export default Audio;
