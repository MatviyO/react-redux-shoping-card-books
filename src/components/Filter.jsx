import React from "react";
import {Menu, Input} from "semantic-ui-react";
import {setSearchQuery} from "../actions/filter";


const Filter = ({filterBy, setFilter, searchQuery, setSearchQuery}) => (
    <Menu secondary>
        <Menu.Item
            active={filterBy === 'all'}
            onClick={setFilter.bind(this, 'all')}
        >All</Menu.Item>
        <Menu.Item
            active={filterBy === 'rating'}
            onClick={setFilter.bind(this, 'rating')}
        >Rating</Menu.Item>
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
        >Author
        </Menu.Item>
            <Menu.Item>
                    <Input icon="search" onChange={e => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search..." />
            </Menu.Item>

    </Menu>
)

export default Filter
