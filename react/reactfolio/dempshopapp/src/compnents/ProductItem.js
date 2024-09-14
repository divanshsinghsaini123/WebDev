import './ProductItem.css' ;
import  '.ProductDate.js' ;
function ProductItem(props){
    return (
        <Card className='product-item'>
            <ProductDate date={props.date}></ProductDate>
            <div className='product-item_description'>
                <h2>{props.title}</h2>
            </div>
        </Card>
    )
} ;


export default ProductItem ;