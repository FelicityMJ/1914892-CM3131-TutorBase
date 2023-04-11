// Define an array to store data
const myArray = ['Kyle: Thanks to TutorBase my son got an A in Higher Maths!', 'Tiffany: I found an amazing tutor for my daughter on TutorBase.', 'Graham: TutorBase has helped connect me to some great students without the worry of expensive agency fees!', 'Alice: Will use TutorBase again, I now recommend to all my friends!'];

// Display the data in a list
const myList = document.getElementById('myList');
for (const item of myArray) {
  const ionItem = document.createElement('ion-item');
  const ionLabel = document.createElement('ion-label');
  ionLabel.textContent = item;
  ionLabel.classList.add('my-label'); // add custom CSS class
  ionItem.appendChild(ionLabel);
  myList.appendChild(ionItem);
}