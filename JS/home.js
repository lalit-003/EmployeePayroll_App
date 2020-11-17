window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml =
        "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
        let empPayrollList = createEmployeePayrollJSON();
        let innerHtml = `${headerHtml}`;
        for(const empPayrollData of empPayrollList){
             innerHtml = `${innerHtml}
             <tr>
                     <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
                     <td>${empPayrollData._name}</td>
                     <td>${empPayrollData._gender}</td>
                     <td>${getDeptHtml(empPayrollData._department)}</td>
                     <td>${empPayrollData._salary}</td>
                     <td>${empPayrollData._startDate}</td>
                     <td>
                         <img id="${empPayrollData._id}" onclick="remove(this)"  src="../Assets/icons/delete-black-18dp.svg" alt="delete">
                         <img id="${empPayrollData._id}" onclick="update(this)"  src="../Assets/icons/create-black-18dp.svg" alt="edit">
                     </td>
                 </tr>
             `;
             document.querySelector('#table-display').innerHTML = innerHtml;
        }
        document.querySelector("#table-display").innerHTML = innerHtml;
     }
     const getDeptHtml = (deptList) => {
         let deptHtml = '';
         for(const dept of deptList){
             deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
         }
         return deptHtml;
     }
     const createEmployeePayrollJSON = () => {
         let empPayrollListLocal = [
             {
                 _name:'Bittu Dalal',
                 _gender:'male',
                 _department:['Engineering',
                                'Finance'],
                 _salary:'500000',
                 _startDate:'29 Oct 2019',
                 _note: '',
                 _id: new Date().getTime(),
                 _profilePic:'../Assets/Ellipse -2.png'
             },
             {
                 _name:'Ankita Saini',
                 _gender:'female',
                 _department:['Sales'],
                 _salary:'400000',
                 _startDate:'28 Feb 2019',
                 _note:'',
                 _id: new Date().getTime()+1,
                 _profilePic:'../Assets/Ellipse -1.png'
             },
             {
                 _name:'Shivam Bhargava',
                 _gender:'male',
                 _department:['Finance'],
                 _startDate:'17 Nov 2018',
                 _note:'',
                 _salary:'600000',
                 _id: new Date().getTime()+2,
                 _profilePic:'../Assets/Ellipse -3.png'
             }
         ]
         return empPayrollListLocal;
     } 
   
