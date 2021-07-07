function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

// Exercício 1
function diasDoMes() {
  let daysList = document.querySelector('#days');
  for (let i in dezDaysList) {
    let daysListElement = document.createElement('li');
    daysListElement.innerHTML = dezDaysList[i];
      if (dezDaysList[i] == 24 || dezDaysList[i] == 31) {
      daysListElement.className = 'day holiday';
    } else if (dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18){
      daysListElement.className = 'day friday';
    } else if (dezDaysList[i] == 25){
      daysListElement.className = 'day holiday friday';
    } else {
      daysListElement.className = 'day';
    }
    daysList.appendChild(daysListElement);
  }
}
diasDoMes();

// Exercício 2
function holidayButton(string){
  let buttonContainer = document.querySelector('.buttons-container');
  let buttonElement = document.createElement('button');
  buttonContainer.appendChild(buttonElement);
  buttonElement.innerHTML = string;
  buttonElement.id = 'btn-holiday';
}
holidayButton('Feriados');

// Exercício 3
function holidayClick(){
  let holidayClickButton = document.getElementById('btn-holiday');
  let holidayFilter = document.querySelectorAll('.holiday');
  let holidayColor = 'rgb(238, 238, 238)';
  let newColor = 'green';

  holidayClickButton.addEventListener('click', function() {
    for (let i = 0; i < holidayFilter.length; i += 1){
      if (holidayFilter[i].style.backgroundColor === newColor){
        holidayFilter[i].style.backgroundColor = holidayColor;
        holidayFilter[i].style.color = "#777";
      } else {
        holidayFilter[i].style.backgroundColor = newColor;
        holidayFilter[i].style.color = "white";
      }
    }
  })
}
holidayClick();

// Exercício 4
function fridayButton(string){
  let buttonContainer = document.querySelector('.buttons-container');
  let buttonElement = document.createElement('button');
  buttonContainer.appendChild(buttonElement);
  buttonElement.innerHTML = string;
  buttonElement.id = 'btn-friday';
}
fridayButton('Sexta-feira');

// Exercício 5 - NÃO CONCLUÍDO Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
function fridayClick(){
  let fridayClickButton = document.getElementById('btn-friday');
  let fridayFilter = document.querySelectorAll('.friday');
  let fridayText = 'SEXTOU!';

  // fridayClickButton.addEventListener('click', function() {
  //   for (let i = 0; i < fridayFilter.length; i += 1) {
  //     if (fridayFilter[i].innerHTML !== fridayText) {
  //         fridayFilter[i].innerHTML = fridayText;
  //     } else {
  //         fridayFilter[i].innerHTML = ;
  //       }
  //     } 
  //   })
    // console.log("teste de click");
    // console.log(fridayFilter);
}
fridayClick();

// Exercício 6
function zoomIn(){
  let dayZoomIn = document.querySelector('#days');
  dayZoomIn.addEventListener('mouseover', function(ev) {
    ev.target.style.fontWeight = '600';
   // console.log(ev.target.innerText);
  })
}
zoomIn();

function zoomOut() {
  let dayZoomOut = document.querySelector('#days');
  dayZoomOut.addEventListener('mouseout', function(ev) {
    ev.target.style.fontWeight = '200';
  })
}
zoomOut();

// Exercício 7 Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
// function tasksAdd(string){
//   let newtaskElement = document.createElement('span');
//   newtaskElement.className = 'my-task';
//   .appendChild(newtaskElement);


// }
// tasksAdd("cozinhar");
