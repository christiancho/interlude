export const parseSeconds = (songDuration) => {
  const minutes = String( Math.floor( songDuration / 60 ) );
  const seconds = ( "0" + String( songDuration - ( minutes * 60 ) ) ).slice(-2);
  return (minutes + ":" + seconds);
};
