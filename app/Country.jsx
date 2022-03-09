import React,{useState} from 'react';

 function Country(props){

    const {myCountry} =props
  return(
    <div className="card">
                        <div className="el-card-item">
                            <div className="el-card-avatar el-overlay-1">
                                {/* Image goes here */}
                                <img
                                    src={myCountry?.flag}
                                    alt="user"
                                />

                            </div>
                            <div className="el-card-content">
                                {/* Name goes here */}
                                <h4 className="m-b-0">{myCountry?.name}</h4>{' '}
                                {/* currency goes here */}
                                <span class="text-muted">Capital {myCountry?.capital}</span>
                                <div>
                                    <label>Currency symbol :</label>
                                    <span> ??</span>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export {Country}