import React from "react";
import {Menu as MenuBase, Popup, List, Image, Button} from "semantic-ui-react";


const CartComponent = ({title, id, image, removeToCart}) => (
        <List>
            <List.Item>
                <List.Content floated="right">
                    <Button onClick={removeToCart.bind(this, id)} color="red">Remove</Button>
                </List.Content>
                <Image avatar src={image}/>
                <List.Content>{title}</List.Content>
            </List.Item>

        </List>
    )


const Menu = ({totalPrice, count, items}) => (

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
                Sum:  &nbsp;<b> {totalPrice}</b><span>&nbsp;$</span>
            </MenuBase.Item>

            <Popup trigger={
                <MenuBase.Item
                    name='help'
                >
                    Card &nbsp;({count})
                </MenuBase.Item>
            }
                   content={items.map(book => <CartComponent {...book}/>)}
                   on="click"
                   hideOnScroll
            />


        </MenuBase.Menu>
    </MenuBase>
)
export default Menu
