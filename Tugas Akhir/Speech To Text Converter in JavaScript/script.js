navigator.mediaDevices
  .getUserMedia({
    audio: true,
  })
  .then(function (stream) {
    console.log("Mic are allowed!");
  })
  .catch(function (err) {
    console.log("Mic not allowed!");
  });

/* JS comes here */
var a = 1;

function runSpeechRecognition() {
  // get output div reference
  var output = document.getElementById("output");
  // get action element reference
  var action = document.getElementById("action");
  // new speech recognition object

  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  // This runs when the speech recognition service starts
  recognition.onstart = function () {
    action.innerHTML = "<small>Silakan berbicara..</small>";
  };

  recognition.onspeechend = function () {
    action.innerHTML = "<small>Selesai.</small>";
    recognition.stop();
  };

  // This runs when the speech recognition service returns result
  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    output.innerHTML = transcript;
    a = a + 1;
    output.classList.remove("hide");
  };

  // start recognition
  recognition.lang = "id-ID";
  recognition.start();
}
