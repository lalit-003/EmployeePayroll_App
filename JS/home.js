window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml =
        "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    const innerHtml = `
      ${headerHtml}  
      <tr>
            <td>
              <img class="profile"  src="../Assets/Ellipse -2.png" alt="" >
            </td>
            <td>Narayan Mahadevan</td>
            <td>Male</td>
            <td>
              <div class="dept-label">HR</div>
              <div class="dept-label">Finance</div>
            </td>
            <td>450000</td>
            <td>17 Nov 2020</td>
            <td>
              <img name="1" onclick="remove(this)" src="../Assets/icons/delete-black-18dp.svg" alt="Delete">
              <img name="1" onclick="update(this)" src="../Assets/icons/create-black-18dp.svg" alt="Edit">
            </td>
      </tr>
      `;
    document.querySelector("#table-display").innerHTML = innerHtml;
}; 