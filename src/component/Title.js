
import React from 'react';
import database from '../db/data.json';
import './Title.css';
function Title({test}){
  console.log(test);
  console.log(typeof test);
  if (test == '1')
  {
      return (
          <div className = 'title1'>
            <img src="img/991.gif"/>
              <text style={{"padding-top":"10px"} }>{database.hospitals[0].name}</text>
          </div>);
  }
  else if (test == '2') // size down
  {
    return (
        <div className='title2'>
            <img src="img/992.gif" />
            <text style={{ "font-size": "35px" }}>{database.hospitals[1].name}</text>
        </div>);
    
  }
  else if (test == '3')
  {
      return (
      <div className='title3'>
          <img src="img/993.gif" />
          {database.hospitals[2].name}
      </div>);
  }
  else if (test == '4')
  {
      return (
          <div className='title4'>
              <img src="img/994.gif" />
              {database.hospitals[3].name}
          </div>);
  }
  else if (test == '5')
  {
      return (
          <div className='title5'>
              <img src="img/995.gif" />
              {database.hospitals[4].name}
          </div>);
  }
  else if (test == '6') //size down
  {
      return (
          <text style={{ "white-space": "pre-wrap" }}> {database.hospitals[5].name}</text>
          )
  }
  else if (test == '7') // upper
  {
      return (
          <div className='title7'>
              <img src="img/997.gif" />
              <text className= 'smallsize'> {database.hospitals[6].name}</text>
          </div>);
  }
  else if (test == '8') // little upper
  {
      return (
          <div className='title8'>
              <img src="img/998.gif" />
              <text className = 'smallsize'>{database.hospitals[7].name}</text>
          </div>);
  }
  else if (test == '9')
  {
      return (
          <div className='title9'>
              <img src="img/999.gif" />
              {database.hospitals[8].name}
          </div>);
  }
  else if (test == '10')
  {
      return (
          <div className='title10'>
              <img src="img/9910.gif" />
              {database.hospitals[9].name}
          </div>);
  }
  else if (test == '11')
  {
      return (
          <div className='title11'>
              <img src="img/9911.gif" />
              {database.hospitals[10].name}
          </div>);
  }
  else if (test == '12')
  {
      return (
          <div className='title12'>
              <img src="img/9912.gif" />
              {database.hospitals[11].name}
          </div>);
  }
  else if (test == '13')
  {
      return (
          <div className='title13'>
              <img src="img/9913.gif" />
              <text style={{ "white-space": "normal" }}> {database.hospitals[12].name}</text>
          </div>);
  }
  else if (test == '14')
  {
      return (
          <div className='title14'>
              <img src="img/9914.gif" />
              {database.hospitals[13].name}
          </div>);
  }
  else if (test == '15')
  {
      return (
          <div className='title15'>
              <img src="img/9915.gif" />
              {database.hospitals[14].name}
          </div>);
  }
};

export default Title;
