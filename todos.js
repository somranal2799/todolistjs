let input = prompt("What would you Like to do?")
const todos = ['Eat','Code', 'Dance', 'Exercise'];
while( input != 'quit' && input !== 'q')

{
    if(input === 'list')
    {
        console.log('***************************')
        for(let i=0; i<todos.length; i++)
        {
            console.log(`${i}: ${todos[i]}`);
        }

        console.log('*****************')
    }

    else if(input === 'new')
    {
        const newTodo = prompt('Okay, what is the new task ?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list` )
    }

    else if(input === 'delete')
    {
        const index = prompt('Enter index to delete ,' );
        if(!Number.isNaN(index))
        {
            const deleted = todos.splice(index,1);
            console.log('Ok,deleted ${deleted[0]}');
        }
        else{
            console.log('Unknown index')
        }
    }
    input = prompt("What Would you like to do?")
}

console.log("Okay, Quit the App")
