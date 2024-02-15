

function filter() {
    const selector = document.querySelector('.filter');

    selector.addEventListener('change', function() {
        let selectedValue = this.value;
        if (selectedValue === 'none') {

            console.log('no filter')

        } else{

            if (selectedValue === 'name') {
                console.log('this is a name')
            } 
            
                else {
                    if (selectedValue === 'surname') {
                        console.log('this is a surename')
                    } else{
                        
                        console.log('no filter')
                    }
                    
            }
        }
        
    });
}

filter();