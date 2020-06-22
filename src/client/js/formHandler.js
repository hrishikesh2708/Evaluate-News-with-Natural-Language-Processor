// jshint esversion: 9

// window.onload = () =>{
//   document.getElementById('submit').addEventListener('click', handleSubmit)
// }

var submit = document.getElementById('submit');
if (submit) {
  submit.addEventListener('click', handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault()

  console.log('::: Form Submitted :::')
  const baseURL = 'http://localhost:8081/sentiment'
  // const baseURL = 'http://evaluate-news-nlp.netlify.com/sentiment'
  let inputtedUrl = document.getElementById('url').value

  if (Client.isValidURL(inputtedUrl)) {
    fetch(baseURL, {// fetches from app.post("/sentiment"
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: inputtedUrl })
    })
      .then(res => res.json())// res is what's received from server/index.js from res.send(projectData);
      .then(res => {
        document.getElementById(
          'polarity'
        ).innerHTML = `<strong>Polarity:</strong><br><hr> ${res.polarity}`
       document.getElementById(
          'subjectivity'
        ).innerHTML = `<strong>Subjectivity:</strong><br><hr> ${res.subjectivity}`
        document.getElementById('text').innerHTML = `<p>${res.text}</p>`
        document.getElementById(
          'polarity-conf'
        ).innerHTML = `<strong>Polarity Confidence:</strong><br><hr> ${res.polarity_confidence}`
      })
  } else {
    alert('Invalid URL')
  }
}

export { handleSubmit }
