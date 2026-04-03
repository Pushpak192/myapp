function getMessage() {
  fetch("/api/message")
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText = data.message;
    })
    .catch(err => {
      document.getElementById("output").innerText = "Error connecting backend";
    });
}
