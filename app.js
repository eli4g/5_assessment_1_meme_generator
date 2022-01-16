const addMeme = document.getElementById('submit-form');
let memeCounter = 0;

document.querySelector('#url').focus();



    addMeme.addEventListener('submit', function(e){

        e.preventDefault();


        let urlText = document.querySelector('input[name="url-text"]').value;
        let topText = document.querySelector('input[name="meme-top-text"]').value;
        let bottomText = document.querySelector('input[name="meme-bottom-text"]').value;

        
        if(urlText === '') 
        {
            alert("Please enter in a URL!")
        
        }else{
            memeCounter ++;
            console.log(memeCounter);

            const mainDiv = document.getElementById('memes');
            console.log(mainDiv);

            const newDiv = document.createElement('div');
            const newImage = document.createElement('img');
            const newImageX = document.createElement('img');
            const newImageTopText = document.createElement('div');
            const newImageBottomText = document.createElement('div');
            

            newDiv.id = memeCounter;
            newDiv.classList.add('container');


            

            
            newImage.src = urlText;
            newImageX.src = "https://www.freeiconspng.com/uploads/x-png-18.png";
            

            newImage.classList.add('main-image'); 
            newImageX.classList.add('x-image', 'centered');

            newImageTopText.classList.add('centered-top', 'text');
            newImageTopText.innerText = topText;

            newImageBottomText.classList.add('centered-bottom' , 'text');
            newImageBottomText.innerText = bottomText;

            

            newDiv.appendChild(newImage);
            newDiv.appendChild(newImageX);
            newDiv.appendChild(newImageTopText);
            newDiv.appendChild(newImageBottomText);

            mainDiv.appendChild(newDiv);

            newDiv.addEventListener("click", function(e){

                e.target.parentElement.remove();
                document.querySelector('#url').focus();

            })


            document.querySelector('#submit-form').reset();
            document.querySelector('#url').focus();
            


    
        }
    
    });



