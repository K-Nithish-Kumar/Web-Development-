const paragraph = document.getElementById('paragraph');
const result = document.getElementById('result');
const btn = document.querySelector("button[type='button']");

btn.addEventListener('click', function(){
    if(paragraph.hasAttributes()){
        let output = "Attributes of paragraphs are: \n";
        for(const attr of paragraph.attributes){
            output += `${attr.name}->${attr.value}\n`;
        }

        result.textContent=output;
    } else {
        result.textContent="No attributes are found"
    }
})

alert("Hello,Everyone!")

