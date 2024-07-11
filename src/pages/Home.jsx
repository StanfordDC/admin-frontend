import React from 'react'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} 
from 'recharts';
import { useEffect, useState } from "react";
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useNavigate  } from 'react-router-dom';

function Home() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const [metrics, setMetrics] = useState(null)
  useEffect(() => {
      fetch('http://localhost:8080/responses/metrics')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setMetrics(data);
        })
    }, [])
  const navigate = useNavigate();
  const navigateToResponses = () => {
    navigate('/responses'); 
  };
  const [history, setHistory] = useState(null)
  useEffect(() => {
    fetch('http://localhost:8080/responses/history')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setHistory(data);
      })
  }, [])

  const transformData = (monthsData) => {
    const monthNames = [
      { full: 'january', short: 'Jan' },
      { full: 'february', short: 'Feb' },
      { full: 'march', short: 'Mar' },
      { full: 'april', short: 'Apr' },
      { full: 'may', short: 'May' },
      { full: 'june', short: 'Jun' },
      { full: 'july', short: 'Jul' },
      { full: 'august', short: 'Aug' },
      { full: 'september', short: 'Sep' },
      { full: 'october', short: 'Oct' },
      { full: 'november', short: 'Nov' },
      { full: 'december', short: 'Dec' },
    ];
    
    return monthsData.map(month => ({
      name: monthNames[month.month - 1].short, // Adjust index to match JavaScript (0-indexed)
      "Feature Usages": month.feature,
      "Good Responses": month.good,
      "Bad Responses": month.bad,
    }));
  };
     
  return (  
    <main className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className='main-container'>
        <div className='main-title'>
              <h3>METRICS</h3>
          </div>

          <div className='main-cards'>
              <div className='card'>
                  <div className='card-inner'>
                      <h3>FEATURE USAGES</h3>
                  </div>
                  <h1>{metrics != null ? metrics.feature : 0}</h1>
              </div>
              <div className='card' onClick={navigateToResponses}>
                  <div className='card-inner'>
                      <h3>ALL RESPONSES</h3>
                  </div>
                  <h1>{metrics != null ? metrics.count : 0}</h1>
              </div>
              <div className='card' onClick={navigateToResponses}>
                  <div className='card-inner'>
                      <h3>GOOD RESPONSES</h3>
                  </div>
                  <h1>{metrics != null ? metrics.goodResponse : 0}</h1>
              </div>
              <div className='card' onClick={navigateToResponses}>
                  <div className='card-inner'>
                      <h3>BAD RESPONSES</h3>
                  </div>
                  <h1>{metrics != null ? metrics.badResponse : 0}</h1>
              </div>
          </div>
          
          <div className='main-title'>
              <h3>USAGES CHART</h3>
          </div>
          <div className='charts'>
            <BarChart
            width={900}
            height={300}
              data={history != null ? transformData(history) : null}
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Feature Usages" fill="#2962ff" />
              <Bar dataKey="Good Responses" fill="#2e7d32" />
              <Bar dataKey="Bad Responses" fill="#d50000" />
            </BarChart>
          </div>
      </div>
    </main>
  )
}

export default Home