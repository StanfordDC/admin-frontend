import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsCheck, BsX}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
from 'recharts';
import { useEffect, useState } from "react";
import AddWasteType from './AddWasteType'
import SearchWasteType from './SearchWasteType';
import { useNavigate  } from 'react-router-dom';

function Home({showCard, listWasteTypes}) {

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
    navigate('/responses'); // Navigate to '/responses' route
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
      good: month.good,
      bad: month.bad,
      feature: month.feature,
    }));
  };
     
  return (  showCard ? <AddWasteType/> : listWasteTypes ? <SearchWasteType/> :
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
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

        <div className='charts'>
          <BarChart
          width={900}
          height={300}
            data={history != null ? transformData(history) : null}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="good" fill="#8884d8" />
            <Bar dataKey="bad" fill="#82ca9d" />
            <Bar dataKey="feature" fill="#ffc658" />
          </BarChart>
        </div>
    </main>
  )
}

export default Home