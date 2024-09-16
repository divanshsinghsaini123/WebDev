
function Card(dataa){
    const [readmore,setReadmore] = useState(false);
    const disc = `${dataa.info.substring(0,200)}...`
    function rdmorehandr(event){
        setReadmore(!readmore);//swap the value 
 
    }
    return(
    <div className="card">
        <img src={dataa.image} className="image"></img>
        <div className="tour_details">
            <h4 className="tour-price">{dataa.price}</h4>
            <h4 className="tour-name">{dataa.name}</h4>
        </div>
        <div className="description">{disc}
            <span className="read-more" onClick={rdmorehandr}>
            {/*  but yaha to click hone pr chize change ho rhi hain 
            to hme yaha ek listener lgana pdega  */ }
                {readmore ? `show less`:`read more`}
            </span>
        </div>

    </div>

    );
}

