import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import worldData from '../assets/world.json'; // Adjust the path if necessary
import chinaData from '../assets/china.json'; // Add your China GeoJSON data
import usData from '../assets/us-states.json'; // Add your US GeoJSON data
import './WorldMap.css';

gsap.registerPlugin(MotionPathPlugin);

// Lists of countries based on duration of stay
const longStayCountries = ["USA", "CHN"];
const mediumStayCountries = ["DNK",];
const traveledCountries = ["JPN", "KOR","ISL", "SGP", "HKG", "VNM", "KHM", "DEU", "FRA", "ITA", "CHE", "NLD", "BEL", "CZE", "NOR", "SWE", "AUT", "HUN", "ESP", "FIN"];

const countryEmojis = {
    JPN: '🍜 ',
    KOR: '🥓',
    DNK: '🪑',
    ISL: '🚗',
    SGP: '✍️',
    HKG: '🥤',
    VNM: '❓',
    KHM: '❓',
    DEU: '🏙️',
    FRA: '🥐',
    ITA: '🛶',
    CHE: '🪂',
    NLD: '👨‍🎨',
    BEL: '🍫',
    CZE: '🏯',
    NOR: '🌊',
    SWE: '🌆',
    AUT: '🎵',
    HUN: '🥂',
    ESP: '🍷',
    FIN: '🦌',
  };

  const WorldMap = () => {
    const [zoom, setZoom] = useState(1);
    const [center, setCenter] = useState([0, 20]);
    const [geoData, setGeoData] = useState(worldData);
    const [clickedCountry, setClickedCountry] = useState(null);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const [angles, setAngles] = useState([]);
  
    const handleCountryClick = (geo, evt) => {
      const countryISO = geo.properties.iso_a3; // Correctly access the ISO code
      if (countryISO === "CHN") {
        setGeoData(chinaData);
        setZoom(4);
        setCenter([104, 35]);
      } else if (countryISO === "USA") {
        setGeoData(usData);
        setZoom(3);
        setCenter([-98, 30]);
      } else {
        setGeoData(worldData);
        setZoom(1);
        setCenter([0, 20]);
      }
  
      // Show emoji on click
      if (countryEmojis[countryISO]) {
        setClickedCountry({ iso: countryISO, name: geo.properties.brk_name });
        setClickPosition({ x: evt.clientX, y: evt.clientY });
  
        // Generate random angles for the emojis between 45 and 135 degrees
        const newAngles = Array.from({ length: 3 }, () => Math.random() * 30 + 75);
        setAngles(newAngles);
  
        setTimeout(() => setClickedCountry(null), 1000); // Reset after 2 seconds to hide the emoji
      }
    };
  
    useEffect(() => {
        if (clickedCountry && angles.length > 0) {
          angles.forEach((angle, index) => {
            const emojiElement = document.getElementById(`emoji-${index}`);
            if (emojiElement) {
              const radians = angle * (Math.PI / 180);
              const xOffset = Math.cos(radians) * 200;
              const yOffset = Math.sin(radians) * -100;
              gsap.to(emojiElement, {
                duration: 1.5, // Faster initial animation
                motionPath: {
                  path: [
                    { x: 0, y: 0 },
                    { x: xOffset / 2, y: yOffset - 100 },
                    { x: xOffset, y: yOffset }
                  ],
                  curviness: 1.2,
                  autoRotate: false
                },
                ease: "power2.out", // Adjust the ease for more gravity-like effect
                opacity: 1, // Keep opacity at 1
              });
            }
          });
        }
      }, [clickedCountry, angles]);
  
    const getCountryStyle = (countryISO) => {
      if (longStayCountries.includes(countryISO)) {
        return {
          default: { fill: "#004080", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" },
          hover: { fill: "#004080", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" , cursor: "pointer"},
          pressed: { fill: "#004080", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" }
        };
      }
      if (mediumStayCountries.includes(countryISO)) {
        return {
          default: { fill: "#0073e6", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" },
          hover: { fill: "#0073e6", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" , cursor: "pointer"},
          pressed: { fill: "#0073e6", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" }
        };
      }
      if (traveledCountries.includes(countryISO)) {
        return {
          default: { fill: "#66b2ff", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" },
          hover: { fill: "#66b2ff", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none", cursor: "pointer"},
          pressed: { fill: "#66b2ff", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" }
        };
      }
      return {
        default: { fill: "#D6D6DA", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" },
        hover: { fill: "#FFA500", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" },
        pressed: { fill: "#E42", stroke: "#FFFFFF", strokeWidth: 0.75, outline: "none" }
      };
    };
  
    return (
      <div>
        <ComposableMap data-tooltip-id="world-map-tooltip">
          <ZoomableGroup center={center} zoom={zoom}>
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map(geo => {
                  const countryISO = geo.properties.iso_a3; // Correctly access the ISO code
                  const countryName = geo.properties.brk_name; // Access the country name
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={getCountryStyle(countryISO)}
                      onClick={(evt) => handleCountryClick(geo, evt)}
                      data-tooltip-id="world-map-tooltip"
                      data-tooltip-content={countryName}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <Tooltip id="world-map-tooltip" />
        {clickedCountry && angles.map((angle, index) => (
          <div
            key={index}
            id={`emoji-${index}`}
            className="emoji-throw"
            style={{ 
              top: `${clickPosition.y}px`, 
              left: `${clickPosition.x}px`
            }}
          >
            {countryEmojis[clickedCountry.iso]}
          </div>
        ))}
      </div>
    );
  };
  
  export default WorldMap;