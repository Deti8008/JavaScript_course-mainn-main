// Javascript Arrays / Lists
            // index   =      0           1             
            // var programmingLanguage = ['Javascript', 'PHP', 
            //     //     2        3       4     5
            //         'Python', 'Java', 'C#', 'C++'];
                
                // console.log(programmingLanguage[programmingLanguage.length - 1]);
                
                // console.log(programmingLanguage[programmingLanguage.lastIndexOf('Python')]);
                
                
                // Array Functions
                // console.log(programmingLanguage);
                
                // programmingLanguage.push('CSS');
                // console.log(programmingLanguage);
                
                // programmingLanguage.pop();
                // console.log(programmingLanguage);
                
                // programmingLanguage.unshift('Ruby');
                // console.log(programmingLanguage);
                
                // programmingLanguage.shift();
                // console.log(programmingLanguage);
                
                // .splice(3, 2, 'elem.')
                // 3 - tregon indexin ku doni ta shtoni ni element
                // 2 - nenkupton sa elemente doni ti fshini nga lista prej te indexi 3
                // elem - eshte elementi qe doni ta shtoni te lista
                // programmingLanguage.splice(1, 2, '.NET');
                // console.log(programmingLanguage);
                
                // Random Numbers
                
                // console.log(Math.floor(Math.random() * 10));
                
                // console.log(programmingLanguage[Math.floor(Math.random() * (programmingLanguage.length - 1))]);
                
                // Array Destructuring

                var students = ['deti', 'ardiani','bisha']

                console.log(students[0]);

                var [x1,x2,x3] = students

                console.log(x1)
                console.log(x2)
                console.log(x3)

                var numbers = [1,2,3,4,5,6,7,8,9,10]
                var [first, second, ...new_numbers_array] = numbers

                console.log(number)