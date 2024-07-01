import React, { useState } from 'react';
import "../styles/Clienttable.css";

const ClientTable = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1); 
  const [clientsPerPage, setClientsPerPage] = useState(10); 
  const [statusFilter, setStatusFilter] = useState(''); 
  const [clients, setClients] = useState([
    { id: 1, name: 'Ali Ahmad', type: 'Doctor, neurons', contractId: 1234, contractName: 'UnComplete Protection', cases: 2, status: 'Active' },
    { id: 2, name: 'John Doe', type: 'Doctor, hearts', contractId: 1235, contractName: 'Half Protection', cases: 2, status: 'Active' },
    { id: 3, name: 'Jane Smith', type: 'Doctor, nervous', contractId: 1236, contractName: 'Quarter Protection', cases: 2, status: 'Active' },
    { id: 4, name: 'Mike Johnson', type: 'Doctor, dental', contractId: 1237, contractName: 'Third/Fourth Protection', cases: 2, status: 'Active' },
    { id: 5, name: 'Sarah Lee', type: 'Doctor, dental', contractId: 1238, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 6, name: 'Michael Chen', type: 'Doctor, non-Surgeon', contractId: 1239, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 7, name: 'Emily Davis', type: 'Doctor, Surgeon', contractId: 1240, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 8, name: 'David Kim', type: 'Doctor, Surgeon', contractId: 1241, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 9, name: 'Olivia Chen', type: 'Doctor, Surgeon', contractId: 1242, contractName: 'UnComplete Protection', cases: 2, status: 'Active' },
    { id: 10, name: 'Emma Davis', type: 'Doctor, Surgeon', contractId: 1243, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 11, name: 'Noah Johnson', type: 'Doctor, Surgeon', contractId: 1244, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 12, name: 'Liam Lee', type: 'Doctor, Surgeon', contractId: 1245, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 13, name: 'Ava Chen', type: 'Doctor, Surgeon', contractId: 1246, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 136, name: 'Mia Davis', type: 'Doctor, Surgeon', contractId: 1247, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 14, name: 'Ethan Kim', type: 'Doctor, Surgeon', contractId: 1248, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 15, name: 'Oliver Johnson', type: 'Doctor, Surgeon', contractId: 1249, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 16, name: 'Charlotte Chen', type: 'Doctor, Surgeon', contractId: 1250, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 17, name: 'Amelia Davis', type: 'Doctor, Surgeon', contractId: 1251, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 18, name: 'Lucas Johnson', type: 'Doctor, Surgeon', contractId: 1252, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 19, name: 'Evelyn Lee', type: 'Doctor, Surgeon', contractId: 1253, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 20, name: 'Harper Chen', type: 'Doctor, Surgeon', contractId: 1254, contractName: 'UnComplete Protection', cases: 2, status: 'Active' },
    { id: 21, name: 'Ella Davis', type: 'Doctor, Surgeon', contractId: 1255, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 22, name: 'Carter Kim', type: 'Doctor, Surgeon', contractId: 1256, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 23, name: 'Avery Johnson', type: 'Doctor, Surgeon', contractId: 1257, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 24, name: 'Abigail Chen', type: 'Doctor, Masage', contractId: 1258, contractName: 'Blocked Protection', cases: 2, status: 'Active' },
    { id: 25, name: 'Scarlett Davis', type: 'Doctor, Orthopedic', contractId: 1259, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 26, name: 'Henry Kim', type: 'Doctor, Heart', contractId: 1260, contractName: 'Complete Protection', cases: 2, status: 'Active' },
    { id: 27, name: 'Chloe Johnson', type: 'Doctor, Arthopedic', contractId: 1261, contractName: 'Complete Protection', cases: 2, status: 'Active' },
  ]);

  const filteredClients = clients.filter(client => {
    const matchesStatus = statusFilter ? client.status === statusFilter : true;
    const matchesSearch = Object.values(client).some(value =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    );
    return matchesStatus && matchesSearch;
  });

  const paginatedClients = filteredClients.slice((currentPage - 1) * clientsPerPage, currentPage * clientsPerPage);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleStatusChange = (id, newStatus) => {
    setClients(prevClients =>
      prevClients.map(client =>
        client.id === id ? { ...client, status: newStatus } : client
      )
    );
  };

  return (
    <div className="client-table">
      <div className="client-table-header">
        <h2>CLIENTS</h2>
        <button>+ Add new Client</button>
      </div>

      <div className="filters">
        <input type="text" placeholder="Search" value={searchText} onChange={handleSearchChange} />
        <select value={statusFilter} onChange={handleStatusFilterChange}>
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button className='grid-flex'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xmlSpace="preserve">
            <defs></defs>
            <g style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path d="M 37.882 90 c -0.338 0 -0.676 -0.086 -0.981 -0.258 c -0.629 -0.354 -1.019 -1.02 -1.019 -1.742 V 45.354 L 3.923 3.208 C 3.464 2.604 3.388 1.791 3.726 1.11 S 4.758 0 5.517 0 h 78.966 c 0.76 0 1.453 0.43 1.791 1.11 s 0.262 1.493 -0.197 2.098 L 54.118 45.354 V 79.37 c 0 0.699 -0.365 1.348 -0.963 1.71 l -14.237 8.63 C 38.601 89.903 38.241 90 37.882 90 z M 9.543 4 l 29.932 39.474 c 0.264 0.348 0.406 0.772 0.406 1.208 v 39.767 l 10.236 -6.205 V 44.682 c 0 -0.437 0.143 -0.861 0.406 -1.208 L 80.457 4 H 9.543 z M 52.118 79.37 h 0.01 H 52.118 z" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1 }} transform="matrix(1 0 0 1 0 0)" strokeLinecap="round" />
            </g>
          </svg> Filter
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>TYPE</th>
            <th>CONTRACT ID</th>
            <th>CONTRACT NAME</th>
            <th>CASES</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {paginatedClients.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.type}</td>
              <td>{client.contractId}</td>
              <td>{client.contractName}</td>
              <td>{client.cases}</td>
              <td>
                <select
                  value={client.status}
                  onChange={(e) => handleStatusChange(client.id, e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} / {Math.ceil(filteredClients.length / clientsPerPage)}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(filteredClients.length / clientsPerPage)}>Next</button>
      </div>

      <div className="records-per-page">
        <label>
          Records / page:
          <select value={clientsPerPage} onChange={(e) => setClientsPerPage(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ClientTable;
