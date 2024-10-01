"use client"

export const Input = ({ placeholder, value, inputHandler, type})=>{
    return(
        <div>
            <input  
                  placeholder={placeholder}
                  type={type}
                  value={value}
                  onChange={inputHandler}
                  className=""/>
        </div>
    );

};