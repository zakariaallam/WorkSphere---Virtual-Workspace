let workers = []
let id = 1

document.getElementById('UpdateWorker').addEventListener('click',()=>{
    let form = document.forms['formAjoute']
    
    let object = {
        name : form.name.value,
        role : form.role.value,
        email : form.email.value,
        number : form.number.value,
        Photo : form.url.value,
        Experiences : [],
        id : id
    }
    // let Experience = {
    //                     company : form.company.value,
    //                     Role : form.roleExperience.value,
    //                     start : form.from.value,
    //                     end : form.to.value,
    //                  }
    // object.Experiences.push(Experience)                 
    workers.push(object)
    affichierListWorker()
    id++


})

function affichierListWorker(){
   let listWorker = document.getElementById('listCards')
   listWorker.innerHTML = ''
   workers.forEach(worker =>{
      listWorker.innerHTML += CardWorker(worker)
   })
}

function CardWorker(Element){
  return `<div class="card ajouteCardEnZone" id="${Element.id}" draggable="true" >
                <div class="card-body d-flex justify-content-around">
                    <img class="w-5 h-5" src="https://avatar.iran.liara.run/public/40" alt="test">

                    <div>
                        <span class="">${Element.name}</span><br>
                        <span>${Element.role}</span>
                    </div>
                    <button class="btn btn-light text-warning">Edit</button>

                </div>
            </div>` 
}


getNameZone()

function getNameZone(){
   document.querySelectorAll('.AjouteEnZone').forEach(btn =>{
    btn.addEventListener('click',()=>{
       let  Zone = btn.parentElement
       let nameZone = Zone.querySelector('.zoneName').textContent;
        ModalistWorker(nameZone)

       AddToZone(Zone)
    })
})
}
function AddToZone(Zone){
    let cards = document.querySelectorAll('#listworkers .ajouteCardEnZone')
   cards.forEach(cardworker =>{
    cardworker.addEventListener('click',()=>{
        let id = cardworker.id
        let indix = workers.findIndex(idx => idx.id == id) 
        let zoneName = Zone.querySelector('.zoneName').textContent
            if(workers[indix].role == zoneName){
                Zone.classList.add('w-25')
                let card = CardWorker(workers[indix])
                Zone.insertAdjacentHTML("beforeend", card)
                workers.splice(indix,1)
                cardworker.remove();
                removeCardOnAside(id)
            }

            if(workers[indix].role == 'Agents de securite' && zoneName.trim() == 'sécurité'){
                console.log(workers[indix].role)
                Zone.classList.add('w-25')
                let card = CardWorker(workers[indix])
                Zone.insertAdjacentHTML("beforeend", card)
                workers.splice(indix,1)
                cardworker.remove();
                removeCardOnAside(id)

            }

            if(workers[indix].role == 'Techniciens IT' && zoneName.trim() == 'serveurs'){
                console.log(workers[indix].role)
                Zone.classList.add('w-25')
                let card = CardWorker(workers[indix])
                Zone.insertAdjacentHTML("beforeend", card)
                workers.splice(indix,1)
                cardworker.remove();
                removeCardOnAside(id)

            }

    })
})
}

// dynameque btn Experience
const AddExperience = document.getElementById('AddExperience')
  AddExperience.addEventListener('click',()=>{
                     let Experience =    `<div class = "Experience">
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
                            </div>`

                          dynamiqueForm.insertAdjacentHTML('beforeend',Experience)
})

function checkExperienceIsFondORNot(object){
    const Experience = document.querySelectorAll('.Experience')
    if(Experience.length>0){
        Experience.forEach(Exp => { 
            let Experience = {
                        company : Exp.querySelector('.company').value,
                        start : Exp.querySelector('.from').value,
                        end : Exp.querySelector('.to').value,
                        Role : Exp.querySelector('.roleExperience').value,
                     }
               object.Experiences.push(Experience)
        })
    }
}