import React, { useState } from 'react';
import './Buyget.css'
import {BsChevronLeft} from "react-icons/bs"
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

function Points() {
    const[reward,setReward]=useState('');
    const[point,setPoint]=useState('');

    return ( 
        <div className='main'>
            
            <a href='/Campaign'><label id='darktext' className='subtitle'><span className='icon'><BsChevronLeft/></span> All programs</label></a>
            <br/>
            <label className='title'>Setup Points Program</label>
            <div className='optionbox' >
               <div className='options' >
                    <label>Rewards per MATIC spent</label>
                    <input id='points' className='smallinput' placeholder='0.05 MATIC' onChange={e => setReward(e.target.value)} ></input>
               </div>
               <div className='options' >
                    <label>Points Multiplier</label>
                    <input className='smallinput' placeholder='x10000' onChange={e => setPoint(e.target.value)} ></input>
               </div>
            </div>
            <label className='example' ><span className='extitle' >Example<br/></span>If a customer spends 100 MATIC, they will get {reward * point} points which is redeemable for {reward * point / 100} MATIC</label>
            <a><button className='buybtn'>Start Program</button></a>
        </div>
     );
}

export default Points;