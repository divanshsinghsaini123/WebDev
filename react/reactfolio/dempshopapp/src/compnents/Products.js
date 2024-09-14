import  './Products.css';
import './ProductItem.js' ;
function Products(props){
   return(
      <Card ClassName="productsss">
        <ProductItem
        title ={props.items[0].name}
        ammount ={props.items[0].amount}
        date ={props.items[0].date}>
        </ProductItem>

        <ProductItem
        title ={props.items[1].name}
        ammount ={props.items[1].amount}
        date ={props.items[1].date}>
        </ProductItem>

        <ProductItem
        title ={props.items[2].name}
        ammount ={props.items[2].amount}
        date ={props.items[2].date}>
        </ProductItem>

        <ProductItem
        title ={props.items[3].name}
        ammount ={props.items[3].amount}
        date ={props.items[3].date}>
        </ProductItem>
      </Card>
   )
}

export default Products ;