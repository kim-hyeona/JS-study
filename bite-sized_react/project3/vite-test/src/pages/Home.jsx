import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header title={"Home"}
      leftChild={
        <Button
          type="positive"
          text={"긍정버튼"}
          onClick={()=>{
            alert("positive btn")
          }}
        />
      }
      rightChild={
        <Button
          type="negative"
          text={"부정버튼"}
          onClick={()=>{
            alert("negative btn")
          }} 
        />
      }
      />

    </div>
  );
};

export default Home;