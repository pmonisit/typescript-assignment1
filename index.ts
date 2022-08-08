// 1. City Directory
 
var cityList: any[] = [];

export const addData = (data: any[]) => {
    cityList.push(data);
    displayData();
    localStorage.setItem("Data", JSON.stringify(cityList));
}

export const displayData = () => {
    let list = document.getElementById("list-view");
    if(list) {
        while(list.hasChildNodes() && list.firstChild){
            list.removeChild(list.firstChild);
        }
    }
    cityList.forEach((item) => {
        let li = document.createElement("li")
        li.innerText = item;
        if(list){
            list.appendChild(li);
             
        }
    })
}

export const clearStorage = () => localStorage.clear()

var render = (data: any) => {
    var app = document.getElementById('list-view')!;
    var cityHTMLString = '<ul>'+
    data.map( (cityDirectory: any) => {
        return '<li>'+
                '<strong>Title: </strong>' + cityDirectory.city + '<br/>' +
                '<strong>Subtitle: </strong>' + cityDirectory.country + '<br/>' +
                '<strong>Author: </strong>' + cityDirectory.population + '<br/>' +
              '</li>';
      }).join('');
      + '</ul>';

    app.innerHTML = cityHTMLString;
  }
  render(cityList);

  var handleSearch = (event: any) => {
    event.preventDefault();
    // Get the search terms from the input field
    var searchTerm = event.target.elements['search'].value;
    // Tokenize the search terms and remove empty spaces
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter((token: any) => {
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    //  Create a regular expression of all the search terms
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = cityList.filter( (cityDirectory) => {
      // Create a string of all object values
      var cityString = '';
      for(var key in cityDirectory) {
        if(cityDirectory.hasOwnProperty(key) && cityDirectory[key] !== '') {
          cityString += cityDirectory[key].toString().toLowerCase().trim() + ' ';
        }
      }
      // Return book objects where a match with the search regex if found
      return cityString.match(searchTermRegex);
    });
    // Render the search results
    render(filteredList);
   }
  };

  document.addEventListener('submit', handleSearch);
  document.addEventListener('reset', function(event){
    event.preventDefault();
    render(cityList);
  })



// 2. ISBN – 10 Validation
export const checkIsbn = (isbn: string | any ) => {
        if (isbn.length != 10)
            return console.log(false);
        // Computing weighted sum of
        // first 9 digits
        let sum = 0;
        for (let i = 0; i < 9; i++)
        {
            let digit = isbn[i] - 0;
                
            if (0 > digit || 9 < digit)
                return console.log(false);
                    
            sum += (digit * (10 - i));
        }
        // Checking last digit.
        let last = isbn[9];
        if (last != 'X' && (last < '0' || last > '9'))
            return console.log(false);
   
        // If last digit is 'X', add 10
        // to sum, else add its value.
        sum += ((last == 'X') ? 10 : (last - 0));
   
        // Return true if weighted sum
        // of digits is divisible by 11.
        if(sum % 11 == 0){
            return console.log(true);
        }else{
            return console.log(false);
        }
        
}
checkIsbn("111222333"); //false



// 3. Change it up!
export const assignment3 = (str: string) => {
    var result = "";
    for (var i = 0; i < str.length; i++) {    
        if (122 == str.charCodeAt(i)) {
            result += "a";      
        } else if (90 == str.charCodeAt(i)) {
            result += "A"; 
        } else if ((65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 89) ||
                   (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 121)) {
            result += String.fromCharCode(str.charCodeAt(i) + 1);
        } else {
            result += str.charAt(i);
        }
    }
    return result.split('').reduce((a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
}
console.log(assignment3("Cat30")); // Output is dbU30


// 4. Moving Zeroes to the End
export const assignment4 = (initialArray: any[]) => {
    var zero: any[] = [];
    var notZero: any[] = [];
    for(let i = 0; i < initialArray.length; i++){
        if(initialArray[i] === 0){
            zero.push(initialArray[i]);
        }else{
            notZero.push(initialArray[i]);
        }
    }
    console.log(notZero.concat(zero));
}
assignment4([false,1,0,1,2,0,1,3,"a"]); // Output is [false,1,1,2,1,3,"a",0,"0]
