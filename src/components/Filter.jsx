import React from "react";
import {Menu} from "semantic-ui-react";


const Filter = ({filterBy, setFilter}) => (
    <Menu secondary>
        <Menu.Item
            active={filterBy === 'all'}
            onClick={setFilter.bind(this, 'all')}
        >All</Menu.Item>
        <Menu.Item
            active={filterBy === 'population'}
            onClick={setFilter.bind(this, 'population')}
        >Population</Menu.Item>
        <Menu.Item
            active={filterBy === 'price_hight'}
            onClick={setFilter.bind(this, 'price_hight')}
        >Price hight</Menu.Item>
        <Menu.Item
            active={filterBy === 'price_low'}
            onClick={setFilter.bind(this, 'price_low')}
        >Price low</Menu.Item>
        <Menu.Item
            active={filterBy === 'author'}
            onClick={setFilter.bind(this, 'author')}
        >Author</Menu.Item>

    </Menu>
)

export default Filter
