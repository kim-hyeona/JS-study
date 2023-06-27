import React, { useState, useEffect } from 'react';
import "../style/editor.css"
import { eomtionList, getFormattedDate } from '../util';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom"
import EmotionItem from '../components/EmotionItem';


const Edit = ({initData, onSubmit}) => {
  const navigate = useNavigate();

  const handleOnGoBack = () => {
    navigate(-1)
  }
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId:3,
    content:""
  })

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
  })
  }

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content:e.target.value,
    })
  }

  const handleSubmit = () => {
    onSubmit(state);
  }

  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId
    })
  }

  useEffect(() => {
    if(initData){
      setState({
        ...initData,
        date:getFormattedDate(new Date(parseInt(initData.date)))
      })
    }
  },[initData])
  return (
    <div  className='Editor'>
      <div className='editor_section'>
        <h4>오늘의 날짜</h4>
      </div>
      <div className='input_wrapper'>
        <input type="date" value={state.date}
          onChange={handleChangeDate} />
      </div>
      <div className='editor_section'>
        <h4>오늘의 감정</h4>
        <div className='input_wrapper emotion_list_wrapper'>
          {eomtionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </div>
      </div>
      <div className='editor_section'>
        <h4>오늘의 일기</h4>
        <textarea 
          placeholder='오늘은 어땠나요?'
          value={state.content}
          onChange={handleChangeContent}
          ></textarea>
      </div>
      <div className='editor_section'>
      </div>
      <div className='editor_section bottom_section'>
        <Button text={'취소하기'} onClick={handleOnGoBack}/>
        <Button text={'작성완료'} type={"positive"} onClick={handleSubmit}/>
      </div>
    </div>
  );
};

export default Edit;