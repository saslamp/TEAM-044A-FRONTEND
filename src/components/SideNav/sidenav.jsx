import React from "react";
import { NavLink } from 'react-router-dom';

export default function Sidenav(props) {
    return (
        <main className="container bg-info rounded" style={{"height":"80vh"}}>
            <h2 className="text-light">MG</h2>
            <nav className="nav side-nav">
                <ul className="list-unstyled">
                    <li><NavLink to="/dashboard" activeClassName="active" exact><i className="fas fa-tachometer-alt"></i> Overview</NavLink></li>
                    <li><NavLink to="/dashboard/transactions" activeClassName="active"><i className="fas fa-money-bill-wave"></i> Transactions</NavLink></li>
                    <li><NavLink to="/dashboard/disputes" activeClassName="active"><i className="fas fa-users"></i> Disputes</NavLink></li>
                    <li><NavLink to="/dashboard/settings" activeClassName="active"><i className="fas fa-cogs"></i> Settings</NavLink></li>
                </ul>
            </nav>
        </main>
    );
}