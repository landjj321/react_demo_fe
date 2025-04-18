import React, { Component,createContext } from 'react'


export const {Provider,Consumer}  =  createContext();

export function withDict(Component){
    const  displayName =  Component.name;
    const C =  props =>{
        const {wrappedComponentRef,...remainingProps} = props;
        // console.log(wrappedComponentRef,"wrappedComponentRef")
        // console.log(remainingProps,"remainingProps")
        return (
            <Consumer>
                {context=>{
                    console.log(context)
                    return  (<Component {...remainingProps} {...context} ref={wrappedComponentRef}></Component> )  
                }}
            </Consumer>
        )
    };
    C.displayName =  displayName;
    C.WrappedComponent = Component;
    return C
}
