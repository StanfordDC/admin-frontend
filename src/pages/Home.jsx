import React from 'react'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} 
from 'recharts';
import { useEffect, useState } from "react";
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useNavigate  } from 'react-router-dom';
import { METRICS_ENDPOINT, METRICS_HISTORY_ENDPOINT } from '../API/API';

function Home() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const [year, setYear] = useState('');
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const applyFilter = () => {
    if(year){
      fetch(METRICS_HISTORY_ENDPOINT(year))
      .then(res => {
        return res.json();
      })
      .then(data => {
        setHistory(data);
      })
    }
  };
  const [metrics, setMetrics] = useState(null)
  useEffect(() => {
      fetch(METRICS_ENDPOINT)
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
    const currentYear = new Date().getFullYear();
    fetch(METRICS_HISTORY_ENDPOINT(currentYear,1,currentYear,12))
      .then(res => {
        return res.json();
      })
      .then(data => {
        setHistory(data);
      })
  }, [])

  const transformData = (monthsData) => {
    const monthNames =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return monthsData.map(month => ({
      name: `${monthNames[month.month - 1]} ${month.year}`,
      "App Usages": month.feature,
      "Correct Identification": month.good,
      "Bad Identification": month.bad,
    }));
  };
  
  const [showFeatureUsages, setShowFeatureUsages] = useState(true);
  const [showGoodResponses, setShowGoodResponses] = useState(true);
  const [showBadResponses, setShowBadResponses] = useState(true);
  const [selectedButton, setSelectedButton] = useState(true);
  const [selectedGood, setSelectedGood] = useState(false);
  const [selectedBad, setSelectedBad] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(false)

  const displayAll =()=> {
    setShowBadResponses(true);
    setShowFeatureUsages(true);
    setShowGoodResponses(true);
    setSelectedBad(false);
    setSelectedGood(false);
    setSelectedFeature(false);
    setSelectedButton(true);
  }

  const displayBadResponses = () => {
    if (selectedButton) {
      setSelectedBad(true);
      setShowBadResponses(true);
      setSelectedButton(false);
      setShowFeatureUsages(false);
      setShowGoodResponses(false);
    } else {
      const newSelectedBad = !selectedBad;
      setSelectedBad(newSelectedBad);
      setShowBadResponses(newSelectedBad);
      if (!newSelectedBad && !selectedGood && !selectedFeature) {
        displayAll();
      }
    }
  }
  
  const displayGoodResponses = () => {
    if (selectedButton) {
      setSelectedGood(true);
      setShowGoodResponses(true);
      setSelectedButton(false);
      setShowFeatureUsages(false);
      setShowBadResponses(false);
    } else {
      const newSelectedGood = !selectedGood;
      setSelectedGood(newSelectedGood);
      setShowGoodResponses(newSelectedGood);
      if (!selectedBad && !newSelectedGood && !selectedFeature) {
        displayAll();
      }
    }
  }
  
  const displayFeatureUsages = () => {
    if (selectedButton) {
      setSelectedFeature(true);
      setShowFeatureUsages(true);
      setSelectedButton(false);
      setShowBadResponses(false);
      setShowGoodResponses(false);
    } else {
      const newSelectedFeature = !selectedFeature;
      setSelectedFeature(newSelectedFeature);
      setShowFeatureUsages(newSelectedFeature);
      if (!selectedBad && !selectedGood && !newSelectedFeature) {
        displayAll();
      }
    }
  }

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
                      <h3>APP USAGES</h3>
                  </div>
                  <h1>{metrics != null ? metrics.feature : 0}</h1>
              </div>
              <div className='card' onClick={navigateToResponses}>
                  <div className='card-inner'>
                      <h3>DETECTED ITEMS</h3>
                  </div>
                  <h1>{metrics != null ? metrics.count : 0}</h1>
              </div>
              <div className='card' onClick={navigateToResponses}>
                  <div className='card-inner'>
                      <h3>CORRECT IDENTIFICATION</h3>
                  </div>
                  <h1>{metrics != null ? metrics.goodResponse : 0}</h1>
              </div>
              <div className='card' onClick={navigateToResponses}>
                  <div className='card-inner'>
                      <h3>BAD IDENTIFICATION</h3>
                  </div>
                  <h1>{metrics != null ? metrics.badResponse : 0}</h1>
              </div>
          </div>
          
          <div className='main-title'>
              <h3>USAGES CHART</h3>
          </div>
          <div className='toggle-buttons'>
            <button
              className={`display-button ${selectedButton ? 'selected' : ''}`}
              onClick={displayAll}>
              DEFAULT
            </button>
            <button
              className={`display-button ${selectedFeature ? 'selected' : ''}`}
              onClick={displayFeatureUsages}>
              APP USAGES
            </button>
            <button
              className={`display-button ${selectedGood ? 'selected' : ''}`}
              onClick={displayGoodResponses}>
              CORRECT IDENTIFICATION
            </button>
            <button
              className={`display-button ${selectedBad ? 'selected' : ''}`}
              onClick={displayBadResponses}>
              BAD IDENTIFICATION
            </button>
          </div>
          <div className='filter-container'>
            <select  className='year-dropdown' value={year} onChange={handleYearChange}>
              <option value="" disabled>CHOOSE YEAR</option>
              {[...Array(new Date().getFullYear() - 2023).keys()].map(i => (
                <option key={2024 + i} value={2024 + i}>{2024 + i}</option>
              ))}
            </select>
            <button className='apply-filter-button' onClick={applyFilter}>APPLY FILTER</button>
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
              {showFeatureUsages && <Bar dataKey="App Usages" fill="#2962ff" />}
              {showGoodResponses && <Bar dataKey="Correct Identification" fill="#2e7d32" />}
              {showBadResponses && <Bar dataKey="Bad Identification" fill="#d50000" />}
            </BarChart>
          </div>
      </div>
    </main>
  )
}

export default Home