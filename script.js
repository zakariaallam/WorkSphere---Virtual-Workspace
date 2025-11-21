import { validationForm } from "./component/validation.js";

let workers = [];
let id = 1;

const photo = document.getElementById("photo");
photo.addEventListener("blur", () => {
  document.getElementById("imgDynamic").src = photo.value;
});
document.getElementById("UpdateWorker").addEventListener("click", () => {
  let form = document.forms["formAjoute"];

  let isvalid = validationForm(form.name, form.email, form.number);

  if (isvalid == 0) {
    let object = {
      name: form.name.value,
      role: form.role.value,
      email: form.email.value,
      number: form.number.value,
      Photo: form.url.value,
      Experiences: [],
      id: id,
    };

    checkExperienceIsFondORNot(object);
    workers.push(object);
    affichierListWorker();
    id++;
  }
});

function affichierListWorker() {
  let listWorker = document.getElementById("listCards");
  listWorker.innerHTML = "";
  workers.forEach((worker) => {
    listWorker.innerHTML += CardWorker(worker);
  });

  //    Add event Profile
  const profileCards = document.querySelectorAll(
    "#listCards .ajouteCardEnZone"
  );
  profileCards.forEach((card) => {
    let id = card.id;
    let indix = workers.findIndex((idx) => idx.id == id);
    card.addEventListener("click", () => {
      affichierProfile(indix);
    });
  });
}

function CardWorker(Element) {
  return `<div class="card ajouteCardEnZone" id="${Element.id}" draggable="true" >
                <div class="card-body d-flex justify-content-around">
                    <img class="w-5 h-5" src="https://avatar.iran.liara.run/public/40" alt="test">

                    <div>
                        <span>${Element.name}</span><br>
                        <span>${Element.role}</span>
                    </div>
                    <button class="btn btn-light text-danger btnSuprimier">X</button>

                </div>
            </div>`;
}

function miniCardWorker(Element) {
  return `<div class="card ajouteCardEnZone cardSize" id="${Element.id}" draggable="true" >
                <div class="card-body d-flex justify-content-between align-items-center w-100 p-0">
                    <img class="imageSize" src="https://avatar.iran.liara.run/public/40" alt="test">

                    <div>
                        <span class="textSize" >${Element.name}</span><br>
                        <span class="textSize">${Element.role}</span>
                    </div>
                    <button class="btn btn-light text-danger btnSuprimier textSize ">X</button>

                </div>
            </div>`;
}

function ModalistWorker(nameZone) {
  let listworkers = document.getElementById("listworkers");
  listworkers.innerHTML = "";
  workers.forEach((worker) => {
    if (worker.role == nameZone) {
      listworkers.innerHTML += CardWorker(worker);
    }
    if (nameZone.trim() == "sécurité" && worker.role == "Agents de securite") {
      listworkers.innerHTML += CardWorker(worker);
    }

    if (nameZone.trim() == "serveurs" && worker.role == "Techniciens IT") {
      listworkers.innerHTML += CardWorker(worker);
    }

    if (worker.role.trim() == "Manager") {
      listworkers.innerHTML += CardWorker(worker);
    }

    if (worker.role.trim() == "Nettoyage" && nameZone.trim() != "d’archives") {
      listworkers.innerHTML += CardWorker(worker);
    }
  });
}
getNameZone();

function getNameZone() {
  document.querySelectorAll(".AjouteEnZone").forEach((btn) => {
    btn.addEventListener("click", () => {
      let Zone = btn.parentElement;
      let nameZone = Zone.querySelector(".zoneName").textContent;
      ModalistWorker(nameZone);

      AddToZone(Zone);
    });
  });
}
function AddToZone(Zone) {
  let cards = document.querySelectorAll("#listworkers .ajouteCardEnZone");
  cards.forEach((cardworker) => {
    cardworker.addEventListener("click", () => {
      let id = cardworker.id;
      let indix = workers.findIndex((idx) => idx.id == id);
      let zoneName = Zone.querySelector(".zoneName").textContent;
      if (workers[indix].role == zoneName) {
        let card = miniCardWorker(workers[indix]);
        Zone.insertAdjacentHTML("afterbegin", card);
        checkZoneIsvide(Zone)
        let object = {
          name: workers[indix].name,
          role: workers[indix].role,
          email: workers[indix].email,
          number: workers[indix].number,
          Photo: workers[indix].Photo,
          Experiences: workers[indix].Experiences,
          id: workers[indix].id,
        };
        workers.splice(indix, 1);
        cardworker.remove();
        removeCardOnAside(id);
        suprmierCardsFromZone(Zone,object);
      }

      if (
        workers[indix].role == "Agents de securite" &&
        zoneName.trim() == "sécurité"
      ) {
        let card = miniCardWorker(workers[indix]);
        Zone.insertAdjacentHTML("afterbegin", card);
        checkZoneIsvide(Zone)
        let object = {
          name: workers[indix].name,
          role: workers[indix].role,
          email: workers[indix].email,
          number: workers[indix].number,
          Photo: workers[indix].Photo,
          Experiences: workers[indix].Experiences,
          id: workers[indix].id,
        };
        workers.splice(indix, 1);
        cardworker.remove();
        removeCardOnAside(id);
        suprmierCardsFromZone(Zone,object);
      }

      if (
        workers[indix].role == "Techniciens IT" &&
        zoneName.trim() == "serveurs"
      ) {
        let card = miniCardWorker(workers[indix]);
        Zone.insertAdjacentHTML("afterbegin", card);
        checkZoneIsvide(Zone)
        let object = {
          name: workers[indix].name,
          role: workers[indix].role,
          email: workers[indix].email,
          number: workers[indix].number,
          Photo: workers[indix].Photo,
          Experiences: workers[indix].Experiences,
          id: workers[indix].id,
        };
        workers.splice(indix, 1);
        cardworker.remove();
        removeCardOnAside(id);
        suprmierCardsFromZone(Zone,object);
      }

      if (workers[indix].role == "Manager") {
        let card = miniCardWorker(workers[indix]);
        Zone.insertAdjacentHTML("afterbegin", card);
        checkZoneIsvide(Zone)
        let object = {
          name: workers[indix].name,
          role: workers[indix].role,
          email: workers[indix].email,
          number: workers[indix].number,
          Photo: workers[indix].Photo,
          Experiences: workers[indix].Experiences,
          id: workers[indix].id,
        };
        workers.splice(indix, 1);
        cardworker.remove();
        removeCardOnAside(id);
        suprmierCardsFromZone(Zone,object);
      }

      if (workers[indix].role == "Nettoyage" && zoneName.trim() != "d’archives" ) {
        let card = miniCardWorker(workers[indix]);
        Zone.insertAdjacentHTML("afterbegin", card);
        checkZoneIsvide(Zone)
        let object = {
          name: workers[indix].name,
          role: workers[indix].role,
          email: workers[indix].email,
          number: workers[indix].number,
          Photo: workers[indix].Photo,
          Experiences: workers[indix].Experiences,
          id: workers[indix].id,
        };
        workers.splice(indix, 1);
        cardworker.remove();
        removeCardOnAside(id);
        suprmierCardsFromZone(Zone,object);
      }
    });
  });
}


function suprmierCardsFromZone(Zone,object) {
  Zone.querySelectorAll(".btnSuprimier").forEach((btn) => {
    btn.addEventListener("click", () => {
         workers.push(object);
      affichierListWorker();
      btn.parentElement.parentElement.remove();
      checkZoneIsvide(Zone)
    });
  });
}


function removeCardOnAside(id) {
  let listCards = document.querySelectorAll("#listCards .ajouteCardEnZone");
  listCards.forEach((card) => {
    if (card.id == id) {
      card.remove();
    }
  });
}

// dynameque btn Experience
const AddExperience = document.getElementById("AddExperience");
AddExperience.addEventListener("click", () => {
  let Experience = `<div class = "Experience">
                     <div class="d-flex flex-column mb-2 ">
                            <label for="company">Company</label>
                            <input class="company" name="company" type="text" placeholder=" Company" >
                            </div>
                            <div class="d-flex flex-column mb-2">
                            <label for="roleExperience">Role</label>
                            <input class="roleExperience" name="roleExperience" type="text" placeholder=" Role" >
                            </div>
                            <div class="d-flex flex-column mb-2">
                            <label for="from">From :</label>
                            <input class="from" name="from" type="date"  >
                            </div>
                            <div class="d-flex flex-column mb-2">
                            <label for="to">To :</label>
                            <input class="to" name="to" type="date"  >
                            </div>
                            </div>`;

  dynamiqueForm.insertAdjacentHTML("beforeend", Experience);
});

function checkExperienceIsFondORNot(object) {
  const Experience = document.querySelectorAll(".Experience");
  if (Experience.length > 0) {
    Experience.forEach((Exp) => {
      let Experience = {
        company: Exp.querySelector(".company").value,
        start: Exp.querySelector(".from").value,
        end: Exp.querySelector(".to").value,
        Role: Exp.querySelector(".roleExperience").value,
      };
      object.Experiences.push(Experience);
    });
  }
}
// Profile

function affichierProfile(id) {
  document.getElementById("profilePhoto").src = workers[id].Photo;
  document.getElementById("profileName").textContent = workers[id].name;
  document.getElementById("profileRole").textContent = workers[id].rol;
  document.getElementById("profileEmail").textContent = workers[id].email;
  document.getElementById("profilePhone").textContent = workers[id].number;
  let count = 1;
  const profileContainer = document.getElementById("profileContainer");
  profileContainer.innerHTML = "";
  workers[id].Experiences.forEach((exp) => {
    let Experience = `<h6>Experience <span id="NumberExperience">${count}</span> </h6>
             p>Company: <span id="profileCompany">${exp.company}</span></p>
             <p>Role: <span id="profileRole">${exp.Role}</span></p>
             <p>From: <span id="profileFrom">${exp.start}</span></p>
          <p>To: <span id="profileTo">${exp.end}</span></p>`;

    profileContainer.insertAdjacentHTML("beforeend", Experience);

    count++;
  });

  // chow modale profile
  let Modal = new bootstrap.Modal(document.getElementById("profileModal"));
  Modal.show();
}


function checkZoneIsvide(Zone){
  let isVide = Zone.querySelectorAll('.cardSize').length
  console.log(isVide)
  let name = Zone.querySelector('.zoneName').textContent.trim()

  if(isVide <= 0 ){
    Zone.classList.remove('bg-transparent')
     Zone.style.backgroundColor = "#e512122d";
     console.log("manadich")
  }else{
    Zone.classList.add('bg-transparent')
    Zone.style.backgroundColor = ''
    console.log(Zone)
  }

}