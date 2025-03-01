
//1
document.getElementById('btn-task-one')
    .addEventListener('click', function () {
        let taskName = getValue('task-one');
        let increment = getConvertedValue('increment');
        increment += 1;
        let decrement = getConvertedValue('decrement');
        decrement -= 1;
        let currentTime = new Date();
        let onlyTime = currentTime.toLocaleTimeString();
        let created = document.createElement('p');
        created.innerHTML = `
        <p class='mt-2 p-1 bg-gray-100 rounded-sm text-sm'>you have completed the task ${taskName} at ${onlyTime}</P>
        `;
        let history = document.getElementById('add-activity');
        alert('Board updated Successfully');
        if(decrement===0){
            alert('congrates!!! You have completed all the current task');
        }
        setInnerText('increment', increment);
        setInnerText('decrement', decrement);
        history.appendChild(created);
        document.getElementById('btn-task-one').setAttribute('disabled', true);
    })

//2
document.getElementById('btn-task-two')
    .addEventListener('click', function () {
        let taskName = getValue('task-two');
        let increment = getConvertedValue('increment');
        increment += 1;
        let decrement = getConvertedValue('decrement');
        decrement -= 1;
        let currentTime = new Date();
        let onlyTime = currentTime.toLocaleTimeString();
        let created = document.createElement('p');
        created.innerHTML = `
        <p class='mt-2 p-1 bg-gray-100 rounded-sm text-sm'>you have completed the task ${taskName} at ${onlyTime}</P>
        `;
        let history = document.getElementById('add-activity');
        alert('Board updated Successfully');
        if(decrement===0){
            alert('congrates!!! You have completed all the current task');
        }
        setInnerText('increment', increment);
        setInnerText('decrement', decrement);
        history.appendChild(created);
        document.getElementById('btn-task-two').setAttribute('disabled', true);
    })

//3
document.getElementById('btn-task-three')
    .addEventListener('click', function () {
        let taskName = getValue('task-three');
        let increment = getConvertedValue('increment');
        increment += 1;
        let decrement = getConvertedValue('decrement');
        decrement -= 1;
        let currentTime = new Date();
        let onlyTime = currentTime.toLocaleTimeString();
        let created = document.createElement('p');
        created.innerHTML = `
        <p class='mt-2 p-1 bg-gray-100 rounded-sm text-sm'>you have completed the task ${taskName} at ${onlyTime}</P>
        `;
        let history = document.getElementById('add-activity');
        alert('Board updated Successfully');
        if(decrement===0){
            alert('congrates!!! You have completed all the current task');
        }
        setInnerText('increment', increment);
        setInnerText('decrement', decrement);
        history.appendChild(created);
        document.getElementById('btn-task-three').setAttribute('disabled', true);
    })

//4
document.getElementById('btn-task-four')
    .addEventListener('click', function () {
        let taskName = getValue('task-four');
        let increment = getConvertedValue('increment');
        increment += 1;
        let decrement = getConvertedValue('decrement');
        decrement -= 1;
        let currentTime = new Date();
        let onlyTime = currentTime.toLocaleTimeString();
        let created = document.createElement('p');
        created.innerHTML = `
        <p class='mt-2 p-1 bg-gray-100 rounded-sm text-sm'>you have completed the task ${taskName} at ${onlyTime}</P>
        `;
        let history = document.getElementById('add-activity');
        alert('Board updated Successfully');
        if(decrement===0){
            alert('congrates!!! You have completed all the current task');
        }
        setInnerText('increment', increment);
        setInnerText('decrement', decrement);
        history.appendChild(created);
        document.getElementById('btn-task-four').setAttribute('disabled', true);
    })

//5
document.getElementById('btn-task-five')
    .addEventListener('click', function () {
        let taskName = getValue('task-five');
        let increment = getConvertedValue('increment');
        increment += 1;
        let decrement = getConvertedValue('decrement');
        decrement -= 1;
        let currentTime = new Date();
        let onlyTime = currentTime.toLocaleTimeString();
        let created = document.createElement('p');
        created.innerHTML = `
        <p class='mt-2 p-1 bg-gray-100 rounded-sm text-sm'>you have completed the task ${taskName} at ${onlyTime}</P>
        `;
        let history = document.getElementById('add-activity');
        alert('Board updated Successfully');
        if(decrement===0){
            alert('congrates!!! You have completed all the current task');
        }
        setInnerText('increment', increment);
        setInnerText('decrement', decrement);
        history.appendChild(created);
        document.getElementById('btn-task-five').setAttribute('disabled', true);
    })

//6
document.getElementById('btn-task-six')
    .addEventListener('click', function () {
        let taskName = getValue('task-six');
        let increment = getConvertedValue('increment');
        increment += 1;
        let decrement = getConvertedValue('decrement');
        decrement -= 1;
        let currentTime = new Date();
        let onlyTime = currentTime.toLocaleTimeString();
        let created = document.createElement('p');
        created.innerHTML = `
        <p class='mt-2 p-1 bg-gray-100 rounded-sm text-sm'>you have completed the task ${taskName} at ${onlyTime}</P>
        `;
        let history = document.getElementById('add-activity');
        alert('Board updated Successfully');
        if(decrement===0){
            alert('congrates!!! You have completed all the current task');
        }
        setInnerText('increment', increment);
        setInnerText('decrement', decrement);
        history.appendChild(created);
        document.getElementById('btn-task-six').setAttribute('disabled', true);
    })

