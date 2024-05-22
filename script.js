const submit = document.getElementById('form-submit');
const table = document.getElementById('table');
const updateBtn = document.getElementById('update');
let editingRow = null;

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone_number = document.getElementById('phone_number').value;

    if (fullName === '' && email === '' && address === '' && phone_number === '') {
        alert('Fields should not be empty!');
        return;
    }

    if (editingRow) {
        // Update the existing row
        editingRow.children[0].textContent = fullName;
        editingRow.children[1].textContent = email;
        editingRow.children[2].textContent = address;
        editingRow.children[3].textContent = phone_number;

        // Clear the form fields and reset the edit state
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('address').value = '';
        document.getElementById('phone_number').value = '';
        editingRow = null;
        return; // Exit the function here to avoid adding a new row
    }

    // Create a new row
    const tableRow = document.createElement('tr');
    const full_name = document.createElement('td');
    const _email = document.createElement('td');
    const _address = document.createElement('td');
    const _phoneNumber = document.createElement('td');
    const action = document.createElement('td');
    const editBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    full_name.textContent = fullName;
    _email.textContent = email;
    _address.textContent = address;
    _phoneNumber.textContent = phone_number;

    editBtn.textContent = 'Edit';
    delBtn.textContent = 'Delete';

    action.appendChild(editBtn);
    action.appendChild(delBtn);

    tableRow.appendChild(full_name);
    tableRow.appendChild(_email);
    tableRow.appendChild(_address);
    tableRow.appendChild(_phoneNumber);
    tableRow.appendChild(action);

    table.appendChild(tableRow);

    delBtn.addEventListener('click', () => {
        tableRow.remove();
    });

    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('name').value = fullName;
        document.getElementById('email').value = email;
        document.getElementById('address').value = address;
        document.getElementById('phone_number').value = phone_number;
        editingRow = tableRow;
    });

    // Clear the form fields after adding a new row
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone_number').value = '';
});