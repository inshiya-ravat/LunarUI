import { css } from '@emotion/react';
import { useState, useRef } from 'react';

const WebcamContainer = css`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const WebcamVideo = css`
  width: 100%;
  border-radius: 10px;
`;

const PreviewImg = css`
  width: 100%;
  border-radius: 10px;
`;

const WebcamCanvas = css`
  display: none;
`;

const WebcamButton = css`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setMediaStream(stream);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error accessing webcam: ${error.message}`);
      }
    }
  };

  const stopWebcam = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
      setMediaStream(null);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context && video.videoWidth && video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageDataUrl = canvas.toDataURL('image/jpeg');

        setCapturedImage(imageDataUrl);

        stopWebcam();
      }
    }
  };

  const resetState = () => {
    stopWebcam();
    setCapturedImage(null);
  };

  return (
    <div css={WebcamContainer}>
      {capturedImage ? (
        <>
          <img css={PreviewImg} src={capturedImage} alt="preview image" />
          <button css={WebcamButton} onClick={resetState}>
            Reset
          </button>
        </>
      ) : (
        <>
          <video css={WebcamVideo} ref={videoRef} autoPlay muted />
          <canvas css={WebcamCanvas} ref={canvasRef} />
          {!videoRef.current ? (
            <button css={WebcamButton} onClick={startWebcam}>
              Start
            </button>
          ) : (
            <button css={WebcamButton} onClick={captureImage}>
              Capture Image
            </button>
          )}
        </>
      )}
    </div>
  );
};
