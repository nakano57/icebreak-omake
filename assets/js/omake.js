async function callApi() {
  const res = await fetch("https://icebreak-question-api.herokuapp.com/api/random");
  const obj= await res.json();
  console.log(obj)

  var t = document.getElementById('title')
  t.innerHTML = '<h1>'+obj.Question+'</h1>'

  var b1 = document.getElementById('btn1')
  b1.innerHTML = obj.Choices.First

  var b2 = document.getElementById('btn2')
  b2.innerHTML = obj.Choices.Second
};

callApi();
