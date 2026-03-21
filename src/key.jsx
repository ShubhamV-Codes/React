

function Key({title, done}){
    return <div>
        {title} - {done ? "Done" : "Need to be Done"};
    </div>
}

export default Key