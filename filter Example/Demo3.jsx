import React from 'react'
import { useState } from 'react';

const Demo3 = () => {  
  // const nums = [1,2,3,4,5,6,7,8,9,10];  //This code have a filter on the number


  // const even = nums.filter(nums => nums % 2 == 0);


  // const nums = [1,2,3,4,5,6,7,8,9,10];


  // const names = ['vishal','keyur','mehul']; //This code have a letter of the first ya text have a delete on the letter.


  // const users = [
  //   {name: 'Vishal',age:20},
  //   {name: 'Keyur', age:29}
  // ]; // This code have a age define on the code


  // const [search,setItems] = useState('');
  // const data = ['Apple','Banana','Mango','chiku']; //This code have a search filter on the code and use of the useSate.


  // const list = ['React','','JS','']; // This code have a empty of the code and delete of the cofe


  // const data = [
  //   {id: 1, name: 'vishal'},
  //   {id: 2, name: 'keyur'},
  //   {id: 3, name: 'mehul'},
  // ]; This code have a filter and update of the code.


  //const filterData = data.filter(item => item.id > 1); //this code have a remove of the id and name.


//   const filterData = data.map(item => { // This code have a update on the data.
//     if(item.id === 1){ return {...item,name: <h1>React</h1>};
// } return true;
// });
  

// const skills = [
//   {name: 'HTML', checked:'true'},
//   {name: 'Css', checked:'false'}
// ];
// const selected = skills.filter(skill => skill.checked); //This code have value of the true or false print of the filter.

// const users = [
//   {name: 'vishal', status:'active'},
//   {name:'mayur', status:'inactive'}
// ];
// const part = users.filter(u => u.status === 'inactive'); //This have a code of the active ya inactive of the print in the map.

// const users = [
//   {name: 'ravi', gender: 'Male'},
//   {name: 'pooja', gender: 'female'}
// ];
// const genders = users.filter(u => u.gender === 'female'); // This code have gender quality of the using on the map and return using on the code .


// const student = [
//   {name: 'Vishal', score: 90},
//   {name: 'ravi', score: 50}
// ];
// const scores = student.filter(u => u.score >= 40); This code have passing and fail print of the code. ?

// const values = ['A', null, 'B', undefined, 'C']
// const clean = values.filter(Boolean);// This code have a Boolean item show of the code. ?

// const items =[ 
//   {name: 'Pen', price: 100},
//   {name: 'shoes', price: 400}
// ]
// const cheap = items.filter(item => item.price >= 100) this code have a show of the price. ?

// const items = [
//   {name: 'Apple', type: 'Fruit'},
//   {name: 'cow', type: 'animal'}
// ]
// const product = items.filter(i => i.type === 'Fruit')

// const users = [
//   {name: 'Vishal', active: true, age: 20},
//   {name: 'meyur', active: false, age: 22}
// ]
// const valid = users.filter(u => u.active === u.age > 18) This code have a use on the active status of the age. ?

// const [category] = useState['fruit'];
// const fruits = [
//   {name:'Mango', type: 'fruit'},
//   {name:'monkey', type: 'animal'}
// ]
// const veg = fruits.filter(fruit => fruit.type === category)

// const lists = ['monkey', 'Lion', 'Cat','Donkey']
// const animal = lists.filter(list => list !== 'Cat') This code have a remove of the item on the list. ?

// const names = ['vishal', 'mehul', 'jay', 'kiko']
// const leghts = names.filter(n => n.length > 4) This code have a print on the name lenght. ?

// const users = [
//   {name: 'Vishal', role:'active'},
//   {name: 'pooja', role:'user'}
// ]
// const roles = users.filter(u => u.role === 'active')

// const [search,setsearch] = useState('');
// const user = [
//   {name: 'Vishal Panchal'},
//   {name: 'Priyanka Panchal'},
//   {name: 'Heena Kokriya'}
// ]
// const setitem = user.filter( u => u.name.toLowerCase().includes(search.toLowerCase())); This code have a use on the useSate have the search item on the code. ?
  return (
    <div>
        <div>
          {/* {even} */}

          {/* {nums.filter(nums => nums % 2 == 0)} */}

          {/* {names.filter(names => names.startsWith('v'))} */}

          {/* {users.filter(users => users.age > 18)}; */}

          {/* <input type='search' value={search} placeholder='search fruits' onChange={(e) => setItems(e.target.value)} /> <br />
          {data.filter(item => item.toLowerCase().includes(search.toLowerCase()))} */}

          {/* {list.filter(item => item !== 'React')} */}

          {/* {filterData.map((item) => (
            <h1 key={item.id}>{item.id}:-{item.name}</h1>
          ))} */}

            {/* {filterData.map((d) => {
              return (
                <div><h1>{d.id}</h1></div>
              )})}*/}

              {/* {filterData.map(d => <h1>{d.id}:- {d.name}</h1>)} */}

              {/* {selected.map(d => <h1>{d.name}, {d.checked}</h1>)} */}

              {/* {part.map((p) => (
                <h1 key={p}>{p.name}: {p.status}</h1>
              ))} */}

              {/* {genders.map(g => <h1>{g.name}:- {g.gender}</h1>)} */}

              {/* {genders.map((g) => {
                return (
                  <h1>{g.name}:-{g.gender}</h1>
                )
              })} */}

              {/* {scores.map(s => <h1>{s.name}:-{s.score}</h1>)} */}

              {/* {clean.map(m => <h1>{m}</h1>)} */}

              {/* {cheap.map(c => <h1>{c.name} :- {c.price}</h1>)} */}

              {/* {product.map(p => <h1>{p.name} :- {p.type}</h1>)} */}

              {/* {valid.map(v => <h1>{v.name}:{v.active} {v.age}</h1>)} */}

              {/* {veg.map(v => <h1>{v.type}</h1>)} */}

              {/* {animal.map(a => <h1>{a}</h1>)} */}

              {/* {leghts.map(l => <h1>{l}</h1>)} */}

              {/* {roles.map(r => <h1>{r.name} :- {r.role}</h1>)} */}

              <input type='search' value={search} placeholder='search fruits' onChange={(e) => setsearch(e.target.value)} /> <br />
              {setitem.map(s =><h1>{s.name}</h1>)}

        </div>
    </div>
  )
}

export default Demo3
