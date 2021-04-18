import React from 'react'
import './TableStyle.css'
import search from './search_b.svg'
import deleteBtn from './delete_b.svg'

let meetings = []
let x = 0

const addRow = () => { 

  var meet = {
    name : document.getElementById('name').value,
    people : document.getElementById('people').value,
    meetDate : document.getElementById('meetDate').value,
    startTime : document.getElementById('startTime').value,
    endTime : document.getElementById('endTime').value,  
  }
  meetings.push(meet)

    let row = document.createElement('tr')

    let column1 = document.createElement('td')
    let column2 = document.createElement('td')
    let column3 = document.createElement('td')
    let column4 = document.createElement('td')
    let column5 = document.createElement('td')
    let column6 = document.createElement('td')
    let column7 = document.createElement('td')

    const column1text = document.createTextNode(`${x+1}`)
    column1.appendChild(column1text)
  
    const column2text = document.createTextNode(meetings[x].name)
    column2.appendChild(column2text)
  
    const column3text = document.createTextNode(meetings[x].people)
    column3.appendChild(column3text)
  
    const column4text = document.createTextNode(meetings[x].meetDate)
    column4.appendChild(column4text)
  
    const column5text = document.createTextNode(meetings[x].startTime)
    column5.appendChild(column5text)
  
    const column6text = document.createTextNode(meetings[x].endTime)
    column6.appendChild(column6text)
    
    const column7btn = document.createElement('img')
    column7btn.src = deleteBtn
    column7btn.onClick = () => {
      document.getElementById('main-table').deleteRow(this.rowIndex)
    }
    column7.appendChild(column7btn)

    row.appendChild(column1)
    row.appendChild(column2)
    row.appendChild(column3)
    row.appendChild(column4)
    row.appendChild(column5)
    row.appendChild(column6)
    row.appendChild(column7)

    document.querySelector('#main-table').appendChild(row)
    x++
  
  
    document.getElementById('name').value = ''
    document.getElementById('people').value = ''
    document.getElementById('endTime').value = ''
    document.getElementById('meetDate').value = ''
    document.getElementById('startTime').value = ''
  

 
 
  console.log(meetings)
  console.log(meetings.length)
}

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("main-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

export default function Table() {
  return (
    <>
      <div id='meeting'>My Meetings</div>
      <div className='filterDiv'>
            <img src = {search} alt = "search"></img>
            <input type = 'text' id = 'search' onKeyUp = {myFunction}></input>
        </div>
      <div className='tableContainer'>
          <table cellspacing='0' cellpadding='0' id='main-table'>
            <tr className='tableHead'>
              <td>Sl.no</td>
              <td>Meeting name</td>
              <td>No. of People attending</td>
              <td>Meeting Date</td>
              <td>Start time</td>
              <td>End time</td>
              <td>Actions</td>
            </tr>
          </table>
          <table cellspacing='0' cellpadding='0'>
            <tr className='addRow'>
              <td></td>
              <td>
                <input type='text' id='name'></input>
              </td>
              <td>
                <input type='number' id='people' width = '100'></input>
              </td>
              <td>
                <input type='date' id='meetDate'></input>
              </td>
              <td>
                <input type='time' id='startTime'></input>
              </td>
              <td>
                <input type='time' id='endTime'></input>
              </td>
              <td>
                <button className = "button" id='add-row' onClick={addRow}>
                  Add
                </button>
              </td>
            </tr>
          </table>
      </div>
    </>
  )
}
