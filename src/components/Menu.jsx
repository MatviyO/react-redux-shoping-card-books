import React from "react";
import {Menu as MenuBase} from "semantic-ui-react";

const Menu = () => (
    <MenuBase>
        <MenuBase.Item
            name='shop'
        >
            Shop
        </MenuBase.Item>

        <MenuBase.Menu position='right'>
            <MenuBase.Item
                name='signup'
            >
                Sum:  &nbsp;<b> 0</b><span>&nbsp;$</span>
            </MenuBase.Item>

            <MenuBase.Item
                name='help'
            >
                Card &nbsp;(0)
            </MenuBase.Item>
        </MenuBase.Menu>
    </MenuBase>
)
export default Menu
