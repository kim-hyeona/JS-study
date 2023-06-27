import React, { useEffect } from 'react';
import "./diarylist.css"
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sortOptionList = [
  {value:"latest",name:"최신순"},
  {value:"oldest",name:"오래된 순"}
]

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortData, setSortData] = useState([]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  const navigate = useNavigate();

  const onClickNew = () => {
    navigate("/new")
  }

  useEffect(()=>{
    const compare = (a,b) => {
      if(sortType === 'latest') {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.data) - Number(b.data);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data)); //JSON.stringify는 인수로 전달한 객체를 문자열로 변환하는 함수 JSON.parse는 문자열로 변환한 값을 다시 객체로 복구하는 함수
    copyList.sort(compare);
    setSortData(copyList); 
  },[data, sortType])

  return (
    <div className='DiaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className='right_col'>
          <Button type={"positive"} text={"새일기쓰셈"} onClick={onClickNew}/>
        </div>
      <div className='list_wrapper'>
        {sortData.map((it) => (
          <DiaryItem key={it.id} {...it}/>
        ))}
      </div>
      </div>    
    </div>
  );
};

export default DiaryList;