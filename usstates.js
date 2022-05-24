
//8.Create JSON file that has atleast 10 states in USA with atleast 8 properties//

{
    "Pennsylvania"; [
        {"State Abbreviation" : "PA"},
         {"Capital" : "Harrisburgh"},
         {"Region": "North East"},
         {"Time zone": "Eastern"},
         ]
      "NewYork" ; [
         {"State Abbreviation": "NY"},
         {"Capital": "Albany"},
         {"Region": "North East"},
         {"Time zone": "Eastern"}
         ]
}
   
        let text1 ='{"Pennsylvania": [' +
            '{"State Abbreviation" : "PA"},' +
             '{"Capital" : "Harrisburgh"},' +
             '{"Region": "North East"},' +
             '{"Time zone": "Eastern"} ]}';

         let text2 ='{"NewYork": [' +
             '{"State Abbreviation": "NY"},' +
              '{"Capital": "Albany"},' +
              '{"Region": "North East"},' +
              '{"Time zone": "Eastern"} ]}';
 


        const state1= JSON.parse(text1);
        const state2= JSON.parse(text2);

            
console.log(state1.Pennsylvania[1].Capital);
console.log(state2.NewYork[1].Capital);