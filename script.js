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