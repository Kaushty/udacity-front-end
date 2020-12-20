function handleSubmit(event){
    event.preventDefault();
    console.log("::: Inside of handleSubmit :::")
    
    try{
        // Get input from the input field
        const url = document.getElementById('name').value;

        // Verify the URL 
        if(Client.validateURL(url)){
            console.log("::: FORM INPUT VALID :::")

            // fetchUrlData(url)

            fetch('/address', {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: url })
            })
            .then(res => res.json())
            .then(function(res){
                console.log('::: Data Received :::')
                console.log(res)
                updateUI(res);
            })

            // fetch('/test',{
            //     method: 'POST',
            //     mode: 'cors',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ text:url })
            // })
            // .then(res => res.json())
            // .then(res => {
            //     console.log('test successful', res)
            // })

            // Client.fetchUrlData(url, baseURL)
            // .then(function(data){
            //     console.log('Data Received Successfully')
            //     updateUI(data)
            // })
            // return "Valid URL"
        }
        else{
            console.log('Invalid URL :: Prompt User')
            document.getElementById('results').classList.toggle('dissapear')
            document.getElementById('error-out').textContent = " Invalid URL "
            // return "Invalid URL"
        }
    }
    catch(err){
        console.log(err)
    }
    return false
}

async function fetchUrlData(url){
    // Function to send request to the server
    console.log("BUILDING REQUEST")
    const response = await fetch('/test', {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: url})
    })
    try{
        const data = await response.json()
        console.log(data)
        return data       
    }
    catch(error){
        console.log(error)
    }
}

function updateUI(data){
    // Update the UI with the desired values
    document.getElementById('results').classList.remove('dissapear')
    document.getElementById('error-out').textContent = ""

    document.getElementById('polarity').textContent = `Polarity : ${data.polarity}`
    document.getElementById('subjectivity').textContent = `Subjectivity : ${data.subjectivity}`
    document.getElementById('polarity-con').textContent = `Polarity Confidence : ${data.polarity_confidence.toFixed(2)}`
    document.getElementById('subject-con').textContent = `Subjectivity Confidence : ${data.subjectivity_confidence.toFixed(2)}`
    document.getElementById('text').textContent = `Text: ${data.text.substr(0,100)}....`
}

export { 
    handleSubmit,
};