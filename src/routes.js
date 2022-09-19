import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage';
import ContactListPage from './pages/ContactListPage';


export const useRoutes = isAuth => {
    if (isAuth) {
        return (
                <Routes>
                    <Route exact path="/" element={<ContactListPage/>} />
                    <Route path="/auth" element={isAuth ? <Navigate to="/" /> : <AuthPage />}/>
                    
                </Routes>
            )
    } else {
            return (
            <Routes>
                <Route exact path="/" element={<AuthPage />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        )
    }

}

