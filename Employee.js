    //Em

    "employees";[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ];


          //change  Json array to string//
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//the below code will change the string to js object//
const obj = JSON.parse(text);



console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);
