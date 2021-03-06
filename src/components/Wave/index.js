import React from "react";
import ReactPlayer from "react-player";
import { VoiceWave, WaveLayout } from "../../styledComponents";

const Wave = ({ audioPath, onBuffer, onReady, onPlay }) => {
  return (
    <WaveLayout>
      <VoiceWave>
        <ReactPlayer
          url={audioPath}
          width="100%"
          height="100%"
          onBuffer={onBuffer}
          onReady={onReady}
          onPlay={onPlay}
          playing
        />
      </VoiceWave>
    </WaveLayout>
  );
};

export { Wave };
