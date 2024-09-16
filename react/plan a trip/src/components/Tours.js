import Card from "./components/Card.js";

function Tourse(tours){
    //hm jsx code me ek hi parent return kr skte hain 
    return(
        <div>
            <div>
             <h2>Plan with love</h2>
            </div>
            <div>
                {
                //mai hr ek value ke liye card return kr raha hun 
                    tours.map((xx)=>{
                        return <Card dataa={xx}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tourse ;