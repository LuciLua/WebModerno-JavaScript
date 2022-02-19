import './Nav.css'
import React from 'react'
// Component
import Item from './Items/Item'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <aside className="menu-area">
            <nav className="menu">
                <Item label="Início" href="#/" icon="home"/>
                <Item label="Usuários" href="#/users" icon="users"/>
            </nav>
        </aside>
    )
}