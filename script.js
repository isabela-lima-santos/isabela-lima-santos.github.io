const livingRoom = document.getElementById("living-room");
const livingRoomButton = document.getElementById("living-room-btn");
const kitchen = document.getElementById("kitchen");
const kitchenButton = document.getElementById("kitchen-btn");
const balcony = document.getElementById("balcony");
const balconyButton = document.getElementById("balcony-btn");
const office = document.getElementById("office");
const officeButton = document.getElementById("office-btn");
const bathroom = document.getElementById("bathroom");
const bathroomButton = document.getElementById("bathroom-btn");
const general = document.getElementById("general");
const generalButton = document.getElementById("general-btn");
const room = document.getElementById("room");
const roomButton = document.getElementById("room-btn");

const hide = 'none';
const hiddenText = 'Exibir fotos e vídeos';
const show = 'block';
const displayText = 'Ocultar fotos e vídeos';

function livingRoomBtn() {
  if (livingRoom.style.display === 'block') {
    livingRoom.style.display = hide;
    livingRoomButton.innerHTML = hiddenText;
  } else {
    livingRoom.style.display = show;
    livingRoomButton.innerHTML = displayText;
  }
}

function kitchenBtn() {
  if (kitchen.style.display === 'block') {
    kitchen.style.display = hide;
    kitchenButton.innerHTML = hiddenText;
  } else {
    kitchen.style.display = show;
    kitchenButton.innerHTML = displayText;
  }
}

function balconyBtn() {
  if (balcony.style.display === 'block') {
    balcony.style.display = hide;
    balconyButton.innerHTML = hiddenText;
  } else {
    balcony.style.display = show;
    balconyButton.innerHTML = displayText;
  }
}

function officeBtn() {
  if (office.style.display === 'block') {
    office.style.display = hide;
    officeButton.innerHTML = hiddenText;
  } else {
    office.style.display = show;
    officeButton.innerHTML = displayText;
  }
}

function bathroomBtn() {
  if (bathroom.style.display === 'block') {
    bathroom.style.display = hide;
    bathroomButton.innerHTML = hiddenText;
  } else {
    bathroom.style.display = show;
    bathroomButton.innerHTML = displayText;
  }
}

function generalBtn() {
  if (general.style.display === 'block') {
    general.style.display = hide;
    generalButton.innerHTML = hiddenText;
  } else {
    general.style.display = show;
    generalButton.innerHTML = displayText;
  }
}

function roomBtn() {
  if (room.style.display === 'block') {
    room.style.display = hide;
    roomButton.innerHTML = hiddenText;
  } else {
    room.style.display = show;
    roomButton.innerHTML = displayText;
  }
}