

export const get = (identifier, target) =>{

    return target ?
        target.querySelector(identifier) :
        document.querySelector(identifier);
};