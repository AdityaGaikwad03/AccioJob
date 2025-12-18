import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function Dashboard(){
    return (
        <>
            <nav style={{display: "flex", gap: "20px"}}>
              <Link to = "profile">Profile</Link>
              <Link to = "setting">Setting</Link>
              <Link to = "billing">Billing</Link>
            </nav>
            <hr/>
            <Outlet/>
        </>
    )
}