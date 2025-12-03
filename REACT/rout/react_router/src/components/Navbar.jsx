import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav style = {{ display: 'flex', gap: '10px', padding: '10px', borderBottom: '1px solid black' }}>
            <NavLink to = "/" style = {({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Home</NavLink>
            <NavLink to = "/about" style = {({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>About</NavLink>
            <NavLink to = "/contact" style = {({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Contact</NavLink>
            <NavLink to = "/users" style = {({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Users</NavLink>
            <NavLink to = "/products" style = {({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Products</NavLink>
            <NavLink to = "/postDetails" style ={({isActive}) => ({ color: isActive ? 'red' : 'blue'})}>PostDetails</NavLink>
        </nav>
    )
}