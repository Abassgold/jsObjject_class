studentArr = [];

function addStudentInfo() {
    var studentInfo = {
        FirstName: studentFirstName.value,
        LastName: studentLastName.value,
        Matric: studentMatric.value,
        Email: studentEmail.value,
        Password: studentPassword.value,
        Department: studentDepartment.value
    }
    if (studentFirstName.value && studentDepartment.value && studentLastName.value && studentMatric.value  && studentEmail.value) {
        studentArr.push(studentInfo);
        document.getElementById("registrationSucceful").style.display = "block"
        document.getElementById("showErrormessage").style.display = "none"
        document.getElementById("SuccessfullyUpdated").style.display = "none"
        document.getElementById("Unsuccessful").style.display = "none"
         console.log(studentArr);
         studentFirstName.value = ''
         studentLastName.value = ''
         studentMatric.value = ''
         studentEmail.value = ''
         studentPassword.value = ''
         studentDepartment.value
    }
    else{
        document.getElementById("SuccessfullyUpdated").style.display = "none"
        document.getElementById("Unsuccessful").style.display = "none"
        document.getElementById("registrationSucceful").style.display = "none"
        document.getElementById("showErrormessage").style.display = "block"
    }
    showStudentInfo();
}

function deleteOne(index){
    studentArr.splice(index);
    showStudentInfo();
      document.getElementById("SuccessfullyUpdated").style.display = "none"
    document.getElementById("Unsuccessful").style.display = "none"
    document.getElementById("registrationSucceful").style.display = "none"
    document.getElementById("showErrormessage").style.display = "none"
}
function editOne(edit){
    var EditedInfo = {
        FirstName: studentFirstName.value,
        LastName: studentLastName.value,
        Matric: studentMatric.value,
        Email: studentEmail.value,
        Password: studentPassword.value,
        Department: studentDepartment.value
    }

    if (studentFirstName.value && studentLastName.value && studentDepartment.value && studentMatric.value && studentEmail.value) {
    studentArr.splice(edit,1,EditedInfo)
    showStudentInfo();
    studentFirstName.value = ''
    studentLastName.value = ''
    studentMatric.value = ''
    studentEmail.value = ''
    studentPassword.value = ''
    studentDepartment.value = ''
    document.getElementById("SuccessfullyUpdated").style.display = "block"
    document.getElementById("Unsuccessful").style.display = "none"
    document.getElementById("registrationSucceful").style.display = "none"
    document.getElementById("showErrormessage").style.display = "none"

    }
    else{
        document.getElementById("Unsuccessful").style.display = "block"
        document.getElementById("registrationSucceful").style.display = "none"
        document.getElementById("showErrormessage").style.display = "none"
        document.getElementById("Successfully Updated").style.display = "none"
    }
}
function showStudentInfo(){
    show.innerHTML = ''
    show.innerHTML = `
    <tr>
    <th>S/N</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Matric</th>
    <th>Email</th>
    <th>Department</th>
    </tr>
    `
    for(i=0; i < studentArr.length; i++){
        show.innerHTML += `
        <tr>
        <td>${1+i}</td>
        <td>${studentArr[i].FirstName}</td>
        <td>${studentArr[i].LastName}</td>
        <td>${studentArr[i].Matric}</td>
        <td>${studentArr[i].Email}</td>
        <td>${studentArr[i].Department}</td>
        <td>
           <button class="btn btn-warning rounded-2" onclick="editOne(${i})">Edit</button>
           <button class="btn btn-danger rounded-2" onclick="deleteOne(${i})">Delete</button>
        </td>
        </tr>
        `
    }
    document.getElementById("Nostudent").style.display = "none" 
}