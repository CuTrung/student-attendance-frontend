import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './components/user/homePage';
import About from './components/user/about';
import Manage from './components/user/teachers/manage';
import Login from './components/both/login';
import Admin from './components/admin/admin';
import CRUDTeachers from './components/admin/teachers/CRUDTeachers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Attendance from './components/user/students/attendance';
import Profile from './components/user/students/profile';
import IndexStudents from './components/admin/students/indexStudents';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />}>

          </Route>
          <Route path="manage" element={<Manage />}>

          </Route>
          <Route path="about" element={<About />}>

          </Route>

          {/* <Route path="student" element={<Student />}> */}
          <Route path="attendance" element={<Attendance />}>

          </Route>
          <Route path="profile" element={<Profile />}>

          </Route>
          {/* </Route> */}
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route path="students" element={<IndexStudents />}>

          </Route>
          <Route path="teachers" element={<CRUDTeachers />}>

          </Route>


        </Route>


      </Routes>
    </BrowserRouter>


    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      style={{ width: "350px" }}
    />

  </>
  // </React.StrictMode>
)
