import './Item.css'

function Item(props){
    const name = props.name;
     const children = props.children;
    return (
        <div>
             <p className="nirma">{name}</p>
           <p>{children}</p> 

        </div>
   
) ;
}
export default Item ;