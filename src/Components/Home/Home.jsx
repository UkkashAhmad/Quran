import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
        <div className="RTL">
            <section className='bg'>
                <h1 style={{fontSize:"xxx-large", color:"whitesmoke"}}>القرآن الکریم</h1>
                <hr />
                <hr />
                <h3>لایمسہ الا المطھرون</h3>
                <hr />
                <hr />
    
                <p>قال رسول اللہ صلی اللہ علیہ وسلم القران حجۃ لک او علیک</p>
            </section>

            <section className='bg2'>

                <div class="row">
                    <div className="col-md-6 col-sm-12">
                        <Link style={{marginTop:"20px"}} className=" card " to='/searchWords' >
                        <div style={{position:"absolute"}} className="card-text">
                        <h1 style={{color:"white", fontSize:"xx-large"}}> کلمات فی القرآن </h1>
                            </div>
                            <img style={{height:"300px"}} src="..." className="card1 card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                ابحث عن كلمة في القرآن أي كلمة تريدها بأي لغة
                                </p>
                            </div>
                        </Link>

                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Link  style={{marginTop:"20px" , fontSize:"xx-large"}} className="card " to='/parah'>
                        <div style={{position:"absolute"}} className="card-text">
                        <h1 style={{color:"white" , fontSize:"xx-large"}}>قراءة القرآن وفقا للجزء </h1>
                            </div>
                            <img style={{height:"300px"}}  src="..." className="card2 card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                يمكنك قراءة القرآن بواسطة الجزء
                                </p>
                            </div>
                            
                        </Link>

                    </div>
                </div>

                <div className="row">

                    <div className="col-md-6 col-sm-12">
                        <Link  style={{marginTop:"20px"}}  className="card" to='/sajda'>
                        <div style={{position:"absolute"}} className="card-text">
                        <h1 style={{fontSize:"xx-large"}}> مقام السجود </h1>
                            </div>
                            <img style={{height:"300px"}} src="..." className="card3 card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                يمكنك معرفة عدد السجدات في القرآن وأين تقع
                                </p>
                            </div>
                        </Link>

                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Link  style={{marginTop:"20px"}} className="card" to='/surah'>
                        <div style={{position:"absolute"}} className="card-text">
                        <h1 style={{color:"white" , fontSize:"xx-large"}}> قراءة القرآن وفقا لسورۃ </h1>
                            </div>
                            <img style={{height:"300px"}} src="..." className="card4 card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                يمكنك قراءة القرآن بواسطة السورۃ

                                </p>
                            </div>
                        </Link>

                    </div>



                </div>


            </section>

            </div>
        </>
    )
}

export default Home