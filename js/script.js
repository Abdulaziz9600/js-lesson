var userMoney = parseInt(prompt ("Pulingiz kirting"));
var viewUser = document.createElement ("p");

viewUser.style.textAlign = "center";
viewUser.style.fontWeight = "bold";;

document.body.append(viewUser);
if (userMoney >= 100) {
  viewUser.textContent = "Telefoni Sotib Olishingiz Mumkin";
  console.log("Telefoni Sotib Olishingiz Mumkin");
  viewUser.style.color = "#F4CA16FF";
  viewUser.style.fontSize ="48px"
} if (userMoney < 100)  { 
  viewUser.textContent = "Pulingiz yetarli emas!😑";
  console.log("Telefoni sotib olaolmaysiz!");
  viewUser.style.color = "#F4CA16FF";
  viewUser.style.fontSize ="48px"
}
 else  { (userMoney === undefined || isNaN(userMoney) || userMoney === null)
  viewUser.textContent = "Pul Miqdorini Kiritmadingiz! Qayta urinib koring😊";
  console.log("Pul Miqdorini Kiritmadingiz! Qayta urinib loring😊");
  viewUser.style.color = "#EB4C42FF";
  viewUser.style.fontSize ="48px"
}