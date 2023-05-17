function hasUserMedia() {
    // Check if the browser supports the WebRTC
    return !!(navigator.mediaDevices.getUserMedia);
  }
  
  if (hasUserMedia()) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(function(stream) {
        var video = document.querySelector('video');
  
        // Inserting our stream to the video tag
        video.srcObject = stream;
      })
      .catch(function(err) {
        console.error('Error accessing video and audio:', err);
      });
  } else {
    alert('WebRTC is not supported');
  }
  
