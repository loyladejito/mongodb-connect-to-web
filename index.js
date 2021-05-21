const content = document.querySelector('#content');
const submit = document.querySelector('#submit');
const update = document.querySelector('#updateBtn');

window.addEventListener('load', () => {
   
    getStudent();

});

submit.addEventListener('click', ()=> {

    let fullname = document.querySelector('#fullname').value;
    let age = document.querySelector('#age').value;
    let address = document.querySelector('#address').value;


    let formData = { fullname, age, address};

    fetch('http://localhost:5000/student', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type' : 'application/json'
        }
    });
   

});


function getStudent(){

    let html = "";

    fetch('http://localhost:5000/student')
    .then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        
        
        console.log(data);
        data.forEach(element => {

            html += `<table class="table table-bordered">
            <tr>
                <td>${element.fullname}</td>
                <td>${element.age}</td>
                <td>${element.address}</td>
                <td><a href="javascript:void(0)" onClick="deleteStudent(${element.id})">Delete</a></td> 
                <td><a href="javascript:void(0)" onClick="editStudent(${element.id})">Edit</a></td>
            </tr>
            </table>`;

        });

        content.innerHTML = html;


    }).catch(error => {
        console.log(error);
    });

}

function deleteStudent(id){

    let formData = {id};

     fetch('http://localhost:5000/student', {
         method: 'DELETE',
         body: JSON.stringify(formData),
         headers: {
            'Content-Type' : 'application/json'
        }

     }).then(response => response.text())
     .then(response => console.log(response))
     .catch(error => console.log(error));
}

function editStudent(id){

    fetch(`http://localhost:5000/student/${id}`)
    .then(res => res.json())
    .then( (data) => {

        document.querySelector('#fullname').value = data[0].fullname;
        document.querySelector('#age').value = data[0].age;
        document.querySelector('#address').value = data[0].address;
        document.querySelector('#ID').value = data[0].id;
    });
  
}

update.addEventListener('click', ()=> {

    let fullname = document.querySelector('#fullname').value;
    let age = document.querySelector('#age').value;
    let address = document.querySelector('#address').value;
    let id = document.querySelector('#ID').value;

    let formData = { fullname, age, address, id };

    fetch('http://localhost:5000/student', {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type' : 'application/json'
        }
    });

});