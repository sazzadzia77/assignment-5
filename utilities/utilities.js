// get innerText...
function getValue(id) {
    const value = document.getElementById(id).innerText;
    return value;
}

// get innerText and convert to num...
function getConvertedValue(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

//set innerText...
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

// //go to blog.html page...
// document.getElementById('btn-blog')
//     .addEventListener('click', function () {
//         window.location.href = 'blog.html';
//     })

// //go to index.html page...
// document.getElementById('btn-back-desk')
//     .addEventListener('click', function () {
//         window.location.href = 'index.html';
//     })
