console.log('hellow --')   ;
        console.log("this ") 
        // you can store any data using let keywork 
        let c  = 'this' ;
        let a   = 10 ;

        var s = 's' ;
        const t = 5; 
        console.log(t) ;
        console.log(c) ;
        console.log(s) ;

        let rectangle= {
                lenght : 8,
                bredth : 2 ,
                area: function(){
                        console.log('area of this triangel -> '+this.lenght*this.bredth) ;
                }
        } ;
        
        console.log(rectangle.lenght);
        console.log(rectangle.bredth);
        rectangle.area() ;

        // for creating many function of similar type 
//    1. factory function
      function createobject() {
        let rectangle= {
                lenght : 8,
                bredth : 2 ,
                area: function(){
                        console.log('area of this triangel -> '+this.lenght*this.bredth) ;
                }

        } ;
        
        return rectangle ;
                
      };

      // create a rectangle using factory funciton 
      let rectangleobj1 = createobject() ;
      console.log(rectangleobj1.lenght) 
// 2 . using constructor function
      function Rectangler(){
             this.length = 1 ,
             this.bredth = 2 

             this.drew =function() {
                console.log('hellow') ;
             }

      }

      let rectangleobj2 = new Rectangler();

      let rectangleobj3 = new Rectangler();

      
      console.log(rectangleobj2.length++)
      console.log(rectangleobj3.length)
      // this is dynamically typed language 
      // Dynamic nature of objects 
        // you can add one another property to it 
        rectangleobj2.color = 'yello' ;
        console.log(rectangleobj2.color);
