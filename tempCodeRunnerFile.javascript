const pr1200 = document.querySelector('#comentarios-pb-preco');

function renderPreco1200(doc){
   let li = document.createElement('li');
   let name = document.createElement('span');
   let dat = document.createElement('span');

  if (doc.data() == "X"){
     console.log("Do not get this Value");
  }
  else {
     li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().Obs;
  dateNow = doc.data().timestamp;
  dat.textContent = dateNow === undefined ? "" : dateNow.toDate(); //This line

   li.appendChild(name);
   li.appendChild(dat);

   pr1200.appendChild(li);
  }
}

db.collection('Preco1200').get().then(snapshot => {
   snapshot.docs.forEach(doc => {
       console.log(doc.data())
        renderPreco1200(doc);
    });
});