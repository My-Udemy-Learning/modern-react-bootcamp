function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}
function remove(multiItem, item){
    for (let i = 0; i < multiItem.length; i++){
        if(multiItem[i] === item ) {
            return [ ...multiItem.slice(0,i), ...multiItem.slice(i + 1) ];
        }
    }
}

export {choice, remove};