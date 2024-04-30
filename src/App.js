
import './App.css';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import LoginAll from './LoginAll'
import UserDashboard from './user-components/UserDashboard';
import UserListTransfers from './user-components/UserListTransfers';
import UserWireTransfert from './user-components/UserWireTransfert';
import AdminDashboard from './admin-components/AdminDashboard';
import ListUser from './admin-components/ListUsers'
import CreateUserForm from './admin-components/CreateUserForm';
import UpdateClientForm from './admin-components/UpdateClientForm';
import TransactionPage from './admin-components/TransactionPage';
import EditTransactionUser from './admin-components/EditTransactionUser';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginAll />}/>
            <Route path="user/dashboard" element={<UserDashboard />} >
                <Route index  element={<UserListTransfers/>} />
                <Route path="transfert" element={<UserWireTransfert />}/>
            </Route>  
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<ListUser/>}/>
              <Route path='add' element={<CreateUserForm/>}/>
              <Route path="edit" element={<UpdateClientForm/>}/>

            </Route>
            <Route path="admin/transaction/:id" element={<TransactionPage/>}> 
        
            </Route>
            <Route path="admin/client_transaction/:id" element={<EditTransactionUser/>}/>
           
      </Routes>
    </BrowserRouter>
  )
}

export default App;
