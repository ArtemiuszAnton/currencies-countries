import style from './App.module.css';


function App() {



  return <>
    <div className={style.select}>
      <input type="text" placeholder='Select Occupation' />
      <div className={style.img_arrow}></div>
    </div>
    <div className={style.block} style={{ visibility: 'hidden' }}>
   
    </div>
  </>;
}

export default App;
