document.getElementById('loadButton').addEventListener('click', function() {
    const contentDiv = document.getElementById('content');
    const newContent = document.createElement('p');
    newContent.textContent = 'Here is some more content loaded dynamically!';
    contentDiv.appendChild(newContent);
});
