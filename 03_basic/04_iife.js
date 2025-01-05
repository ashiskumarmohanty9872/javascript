/*IIFE:-Imediately invoked function expression */
(function chai(){ //Named IIFE
    console.log(`db connected`);
    
})();
// IIFE is used remove the global scope pollution.
( ()=>{
    console.log(`DB connected`);
    
})();
// semicolon was the problem

(  (name)=>{
    console.log(`DB connected two ${name}`);
    
})("Sibun")
