import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import "../styles/Membership.css";

function Membership() {
  const [data, setData] = useState([
    { id: 1, name: 'Sally', email: 'sell@me.com', age: 32, address: 'Islamabad', contact: '+923' },
    { id: 2, name: 'Banno', email: 'benn@me.pk', age: 32, address: 'Karachi', contact: '+923' },
    { id: 3, name: 'Biellu', email: 'billu@me.com.pk', age: 32, address: 'Pakistan', contact: '+923' },
    { id: 4, name: 'Bteillo', email: 'bielo@me.guru', age: 32, address: 'Punjab', contact: '+923' },
    { id: 5, name: 'Ali', email: 'ali@me.sjjs', age: 32, address: 'Bangladesh', contact: '+923' },
    { id: 6, name: 'Stelly', email: 'salsdy@me.com', age: 32, address: 'United Kingdom', contact: '+923' },
    { id: 7, name: 'Bafnno', email: 'basnno@me.com', age: 64, address: 'Saudi Arabia', contact: '+923' },
    { id: 8, name: 'Bfillu', email: 'baillu@me.com', age: 32, address: 'Canada', contact: '+923' },
    { id: 9, name: 'Baaaillo', email: 'bfillo@me.com', age: 65, address: 'South Africa', contact: '+923' },
    { id: 10, name: 'Ali', email: 'adli@me.com', age: 32, address: 'Indonesia', contact: '+923' },
    { id: 11, name: 'Sally', email: 'sfally@me.com', age: 32, address: 'New Zealand', contact: '+923' },
    { id: 12, name: 'Banno', email: 'banno@me.com', age: 32, address: 'Argentina', contact: '+923' },
    { id: 13, name: 'Billu', email: 'billu@me.com', age: 32, address: 'Angola', contact: '+923' },
    { id: 14, name: 'Billo', email: 'billo@me.com', age: 32, address: 'Armenia', contact: '+923' },
    { id: 15, name: 'Ali', email: 'ali@me.com', age: 32, address: 'Algeria', contact: '+923' },
  ]);

  const [filteredData, setFilteredData] = useState(data);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({});
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = data.filter(row =>
      row.name.toLowerCase().includes(value) ||
      row.email.toLowerCase().includes(value) ||
      row.age.toString().includes(value)
    );
    setFilteredData(filtered);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(row => row.id !== id);
    setData(updatedData);
    setFilteredData(updatedData);
  };

  const handleEdit = (row) => {
    setEditingRow(row.id);
    setFormData(row);
    toggleModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    const updatedData = data.map(item => (item.id === editingRow ? formData : item));
    setData(updatedData);
    setFilteredData(updatedData);
    setEditingRow(null);
    setFormData({});
    toggleModal();
  };

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Age',
      selector: row => row.age,
      sortable: true,
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true,
    },
    {
      name: 'Contact',
      selector: row => row.contact,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <>
          <button onClick={() => handleEdit(row)} className="btn btn-primary mr-2">✏️</button>
          <button onClick={() => handleDelete(row.id)} className="btn btn-danger">❌</button>
        </>
      ),
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-xl font-bold mb-4">Members</h2>
      <div className="text-end mb-3">
        <input 
          type="text" 
          placeholder="Filter..." 
          className="p-2 border border-gray-300 rounded"
          onChange={handleFilter} 
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        selectableRows
        pagination
      />
      {modal && (
        <div className='flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm place-items-center gap-4 place-content-center'>
          <div className='w-[600px] bg-white rounded-md p-5 flex flex-col'>
            <button id='btn1' className='text-black text-xl place-self-end' onClick={toggleModal}>
              x
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Member</h2>
            <form className="max-w-md mx-auto">
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="name" id="floating_name" className="block py-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.name || ''} onChange={handleChange} required />
                <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.email || ''} onChange={handleChange} required />
                <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="number" name="age" id="floating_age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.age || ''} onChange={handleChange} required />
                <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="address" id="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.address || ''} onChange={handleChange} required />
                <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="tel" name="contact" id="floating_contact" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.contact || ''} onChange={handleChange} required />
                <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact</label>
              </div>
              <button id='btn' type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSave}>Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Membership;
