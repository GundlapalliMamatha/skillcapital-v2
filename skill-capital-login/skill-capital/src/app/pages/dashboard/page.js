// "use client";
// import React, { useState } from 'react';
// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const validateForm = () => {
//     let valid = true;
//     setUsernameError('');
//     setPasswordError('');
//     if (!username) {
//       setUsernameError('Enter Username');
//       valid = false;
//     }
//     if (!password) {
//       setPasswordError('Enter Password');
//       valid = false;
//     }
//     return valid;
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/login/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();
//       setLoading(false);
//       if (response.ok) {
//         console.log('Login successful:', data);
        
//       } else {
//         setPasswordError(data.message || 'Login failed.');
//       }
//     } catch (error) {
//       setLoading(false);
//       setPasswordError('error.');
//     }
//   };
//   return (
//     <main>
//       <div className="w-full lg:flex lg:h-screen">
//         <div className="p-10 pb-8 lg:w-1/2 flex flex-col justify-center bg-white lg:pl-20">
//           <div className="pl-5">
//             <img src="/skillcapital.png" alt="Skill Capital" />
//           </div>
//           <form className="container-sm relative top-9 border rounded max-w-xl shadow-lg p-9" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label className="block text-gray-900 text-sm mb-2" htmlFor="email">Username</label>
//               <input
//                 className="shadow-sm appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="username"
//                 type="text"
//                 name="username"
//                 placeholder="Enter username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-900 text-sm mb-2" htmlFor="password">Password</label>
//               <input
//                 className="shadow-sm appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
//             </div>
//             <div className="pt-9">
//               <button
//                 type="submit"
//                 className="w-full justify-center rounded-lg bg-gradient-to-r from-orange-300 to-pink-500 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 disabled={loading}
//               >
//                 {loading ? 'Logging in...' : 'Login'}
//               </button>
//             </div>
//             <div className="mt-10">
//               <input type="checkbox" className="h-4 w-5" id="remember-me" />
//               <label htmlFor="remember-me" className="pl-1">Remember me</label>
//               <p className="text-gray-600 text-center pt-10">
//                 ©2024, All rights reserved
//               </p>
//             </div>
//           </form>
//         </div>
//         <div className="hidden lg:flex lg:w-2/4 flex-col items-center justify-center bg-white pt-20">
//           <h2 className="text-2xl font-bold text-center mb-4 text-[#042D60] text-[2rem]">Seamlessly manage all learner data in a unified platform.</h2>
//           <p className="text-center text-gray-700 mb-6">Centralize customer data effortlessly. Streamline communication, sales, and support for seamless growth.</p>
//           <img src="/skill.png" alt="Skill Capital Login Page" />
//         </div>
//       </div>
//     </main>
//   );
// }
// "use client";
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import dynamic from 'next/dynamic';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
// export default function Dashboard() {
//     return (
//         <div style={{ color: "#F4F6F9" }}>
//             <div >
//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-2 mx-10 mt-5'>
//                     <div className='flex border-2 border p-2 rounded-lg bg-white shadow-lg shadow-slate-200'>
//                         <img src='/person.svg'></img>
//                         <div className='m-5'>
//                             <p style={{ color: '#A8C6DF' }}>Not Contacted</p>
//                             <p className="text-2xl font-bold text-black">14</p>
//                         </div>
//                     </div>
//                     <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
//                         <img src='/person.svg'></img>
//                         <div className='m-5'>
//                             <p style={{ color: '#A8C6DF' }}>Not Contacted</p>
//                             <p className="text-2xl font-bold text-black">14</p>
//                         </div>
//                     </div>
//                     <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200  bg-white'>
//                         <img src='/person.svg'></img>
//                         <div className='m-5'>
//                             <p style={{ color: '#A8C6DF' }}>Not Contacted</p>
//                             <p className="text-2xl font-bold text-black">14</p>
//                         </div>
//                     </div>
//                     <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
//                         <img src='/person.svg'></img>
//                         <div className='m-5'>
//                             <p style={{ color: '#A8C6DF' }}>Not Contacted</p>
//                             <p className="text-2xl font-bold text-black">14</p>
//                         </div>
//                     </div>
//                     <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
//                         <img src='/person.svg'></img>
//                         <div className='m-5'>
//                             <p style={{ color: '#A8C6DF' }}>Not Contacted</p>
//                             <p className="text-2xl font-bold text-black">14</p>
//                         </div>
//                     </div>
//                     <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
//                         <img src='/person.svg'></img>
//                         <div className='m-5'>
//                             <p style={{ color: '#A8C6DF' }}>Not Contacted</p>
//                             <p className="text-2xl font-bold text-black">14</p>
//                         </div>
//                     </div>
//                     <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
//                         <img src='/person.svg'></img>
//                         <div className='m-5'>
//                             <p style={{ color: '#A8C6DF' }}>Not Contacted</p>
//                             <p className="text-2xl font-bold text-black">14</p>
//                         </div>
//                     </div>
//                     <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
//                         <img src='/person.svg'></img>
//                         <div className='m-5'>
//                             <p style={{ color: '#A8C6DF' }}>Not Contacted</p>
//                             <p className="text-2xl font-bold text-black">14</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-col lg:flex-row mb-3">
//                 <div className="flex-1 bg-white shadow-lg  my-4 lg:ms-10">
//                     <Chart
//                         type='line'
//                         width="140%"
//                         height={400}
//                         series={[
//                             {
//                                 name: 'Leads',
//                                 data: [0.0, 0.5, 1.0, 1.5, 2.0, null, null, null, null, null, null, null, null, null, null]
//                             }
//                         ]}
//                         options={{
//                             chart: {
//                                 id: 'today-leads',
//                                 toolbar: {
//                                     show: false
//                                 },
//                                 margin: {
//                                     bottom: 0
//                                 }
//                             },
//                             title: {
//                                 text: 'Today Leads',
//                                 align: 'center',
//                                 margin: 20,
//                                 offsetY: 0,
//                                 style: {
//                                     fontSize: '20px',
//                                     fontWeight: 'normal',
//                                     color: '#263238'
//                                 }
//                             },
//                             xaxis: {
//                                 categories: ['12am', '1am', '2am', '3am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm', '11pm'],
//                                 labels: {
//                                     show: true,
//                                     rotate: -45,
//                                     hideOverlappingLabels: false,
//                                     offsetX: 0,
//                                     offsetY: -5
//                                 },
//                             },
//                             yaxis: {
//                                 tickAmount: 4,
//                                 labels: {
//                                     formatter: function (value) {
//                                         if ([0.0, 0.5, 1.0, 1.5, 2.0].includes(value)) {
//                                             return value;
//                                         }
//                                         return '';
//                                     }
//                                 }
//                             }
//                         }}
//                     />
//                 </div>
//                 <div className="flex-1 bg-white shadow-lg mx-4 my-4 lg:ms-16 me-20 text-black">
//                     <p className="text-center">Analytics</p>
//                     <div className="p-16">
//                         <h1 className="border rounded-full border-2 border-black w-full text-center p-32 font-bold">
//                             <p>0</p>
//                             Leads
//                         </h1>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
"use client"
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faUsers, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const useChartData = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummy.restapiexample.com/api/v1/employees");
        const age = response.data.data.map(item => item.employee_age);
        const salary = response.data.data.map(item => item.employee_salary);
        setCategory(salary);
        setData(age);
        setOptions({
          chart: { id: 'apexchart-example' },
          xaxis: { categories: age }
        });
        setSeries([{ name: 'Salary', data: salary }]);
      } catch (error) {
        console.error(error);
        alert('Error fetching data');
      }
    };
    fetchData();
  }, []);
  return { category, data, options, series };
};
const ChartComponent = () => {
  const { options, series } = useChartData();
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="100%"
      height={300}
    />
  );
};
const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    leads: false,
    opportunities: false,
    analytics: false,
    learners: false,
    courses: false,
    activities: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [notificationDialogOpen, setNotificationDialogOpen] = useState(false);
  const [userDialogOpen, setUserDialogOpen] = useState(false);
  const handleDropdownToggle = (menu) => {
    setDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu],
    }));7
    setActiveMenu(menu);
  };
  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeNotificationDialog = () => setNotificationDialogOpen(false);
  const closeUserDialog = () => setUserDialogOpen(false);
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="relative flex flex-col lg:flex-row bg-white shadow-md lg:p-2 shadow-gray-400">
        <div className="lg:hidden absolute left-4 flex items-end z-4">
          <button onClick={handleMobileMenuToggle} aria-label="Toggle mobile menu" className="text-gray-700">
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="2x" />
          </button>
        </div>
        <img src="/menu.59f55fe5 (1).svg" alt="Menu Icon" className="w-8 hidden lg:block" />
        <div className="flex-1 flex justify-center lg:justify-start items-center my-2 sm:my-0">
          <img
            src="/skillcapital.png"
            alt="Skill Capital"
            className="w-48 sm:w-60 md:w-80 lg:w-40"
          />
        </div>
        <div className="hidden lg:flex justify-items-end align-end sm:space-x-2 text-sm">
          {['Home', 'leads', 'opportunities', 'learners', 'courses', 'activities', 'analytics'].map(menu => (
            <div className="relative" key={menu}>
              <button
                onClick={() => handleDropdownToggle(menu)}
                className={`text-gray-700 hover:bg-red-100 rounded px-2 py-2 sm:px-3 sm:py-2 flex items-end text-sm sm:text-base ${activeMenu === menu ? 'bg-red-100 border-b-2 border-red-500' : ''}`}
                aria-label={`Toggle ${menu} menu`}
              >
                <span className='capitalize text-sm ml-2'>{menu}</span>
                <FontAwesomeIcon icon={faAngleDown} className="ml-4 sm:ml-2 space-y-4" />
              </button>
              {dropdownOpen[menu] && (
                <div className="absolute left-0 mt-2 w-36 sm:w-40 bg-white shadow-lg rounded-md z-10">
                </div>
              )}
            </div>
          ))}
          <div className="flex space-x-2 sm:space-x-4 ml-2 sm:ml-4">
            <Link href="/star">
              <img src="/Stars.png" className='w-6 sm:w-8' alt="Stars" />
            </Link>
            <button onClick={() => setNotificationDialogOpen(true)} aria-label="Open notifications">
              <FontAwesomeIcon icon={faBell} size="lg" />
            </button>
            <button onClick={() => setUserDialogOpen(true)} aria-label="Open user menu">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white shadow-lg z-50">
          <div className="p-4 flex flex-col">
            <div className="flex justify-end mb-4">
              <button onClick={handleMobileMenuToggle} aria-label="Close mobile menu" className="text-gray-700">
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </button>
            </div>
            {['learners', 'courses', 'activities', 'leads', 'opportunities', 'analytics'].map(menu => (
              <div className="relative mb-4" key={menu}>
                <button
                  onClick={() => handleDropdownToggle(menu)}
                  className={`text-gray-700 hover:bg-red-100 rounded px-3 py-2 flex items-center w-full justify-between text-lg ${activeMenu === menu ? 'bg-red-100 border-b-2 border-red-500' : ''}`}
                  aria-label={`Toggle ${menu} menu`}
                >
                  <span className='capitalize'>{menu}</span>
                  <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
                </button>
                {dropdownOpen[menu] && (
                  <div className="mt-2 w-full bg-gray-100 shadow-lg rounded-md">
                  </div>
                )}
              </div>
            ))}
            <div className="flex space-x-4 mt-4">
              <Link href="/star">
                <img src="/Stars.png" className='w-8' alt="Stars" />
              </Link>
              <button onClick={() => setNotificationDialogOpen(true)} aria-label="Open notifications">
                <FontAwesomeIcon icon={faBell} size="2x" />
              </button>
              <button onClick={() => setUserDialogOpen(true)} aria-label="Open user menu">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 p-4 sm:p-8 font-bold text-base sm:text-lg">
        {[
          { label: 'Not Contacted', count: 1 },
          { label: 'Warm Lead', count: 25 },
          { label: 'Attempted', count: 21 },
          { label: 'Registered', count: 1 },
          { label: 'Opportunity', count: 1 },
          { label: 'Cold Lead', count: 36 },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-md sm:p-6 rounded-xl flex items-center space-x-4 sm:space-x-6">
          <div className="flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faUsers} className="text-blue-500" size="lg" />
          </div>
          <div className="flex-grow">
          <h2 className="text-gray-500 text-sm sm:text-base">{item.label}</h2>
            <p className="text-xl sm:text-2xl">{item.count}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-grow bg-white shadow-md p-4 sm:p-6 rounded-md">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Today Leads</h2>
        <ChartComponent />
      </div>
      <div className="w-full sm:w-1/4 bg-white shadow-md p-4 sm:p-6 rounded-md flex flex-col items-center">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Analytics</h2>
        <div className="p-4 sm:p-6">
          <h1 className="border rounded-full border-2 border-black text-center p-14 sm:p-12 text-sm sm:text-3xl">
            <p className="text-2xl">0</p>
            <span className='text-xl'> Leads</span>
          </h1>
        </div>
      </div>
    </div>
    {/* Notification Dialog */}
    {notificationDialogOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <p className="mt-2">You have no new notifications.</p>
          <button onClick={closeNotificationDialog} className="mt-4 text-blue-500">Close</button>
        </div>
      </div>
    )}
    {/* User Dialog */}
    {userDialogOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">User Menu</h3>
          <Link href="/user">
            <span className="block mt-2 text-blue-500">User Profile</span>
          </Link>
          <Link href="/logout">
            <span className="block mt-2 text-blue-500">Log Out</span>
          </Link>
          <button onClick={closeUserDialog} className="block mt-4 text-blue-500">Close</button>
        </div>
      </div>
    )}
  </main>
);
};
export default Home;