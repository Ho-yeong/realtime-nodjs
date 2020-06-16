import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
  board.innerText = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.point}`;
    board.appendChild(playerElement);
  });
};

const setNotifis = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handlePlayerUPdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setNotifis("");
  // disable canvas events
  disableCanvas();
  // hide the canvas controls
  hideControls();
  enableChat();
};

export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  notifs.innerText = `You are the leader, paint : ${word} `;
};

export const handleGameEnded = () => {
  setNotifis("Game ended");
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleGameStarting = () => {
  setNotifis("Game will start soon");
};
