import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as d3 from "d3";
import * as THREE from "three";
import worldData from "../assets/world.json";
import chinaData from "../assets/china.json";
import usStatesData from "../assets/us-states.json";
import "./WorldGlobe.css";

const travelLogs = [
	{
		country: "Japan",
		funFacts: [
			"Ate octupus sashimi and decided would never eat it again.",
			"It's the first time I plan the trip by myself for my whole family.",
			"I was deer park in Nara. The deers were so hungry that they were chasing anyone with food.",
			"In Hokkaido, my friends and I went to outdoor onsen when it was below zero.",
		],
		images: ["path/to/france1.jpg", "path/to/france2.jpg"],
	},
	{
		country: "France",
		funFacts: [
			"Climbed the Eiffel Tower.",
			"Toured the Louvre Museum.",
			"Cruised on the Seine River.",
		],
		images: ["path/to/france1.jpg", "path/to/france2.jpg"],
	},
	{
		country: "France",
		funFacts: [
			"Climbed the Eiffel Tower.",
			"Toured the Louvre Museum.",
			"Cruised on the Seine River.",
		],
		images: ["path/to/france1.jpg", "path/to/france2.jpg"],
	},
];

const countryVisited = [
	{ name: "Japan", visits: 3 },
	{ name: "South Korea", visits: 1 },
	{ name: "Cambodia", visits: 1 },
	{ name: "Vietnam", visits: 1 },
	{ name: "Norway", visits: 2 },
	{ name: "Finland", visits: 2 },
	{ name: "Sweden", visits: 2 },
	{ name: "Iceland", visits: 1 },
	{ name: "Hungary", visits: 1 },
	{ name: "Czech Republic", visits: 1 },
	{ name: "Germany", visits: 1 },
	{ name: "France", visits: 2 },
	{ name: "Spain", visits: 1 },
	{ name: "Switzerland", visits: 1 },
	{ name: "Belgium", visits: 1 },
	{ name: "Austria", visits: 1 },
	{ name: "Italy", visits: 1 },
	{ name: "Netherlands", visits: 1 },
];

const countryLivedIn = [
	{ name: "United States of America", color: "orange" },
	{ name: "China", color: "orange" },
	{ name: "Denmark", color: "orange" },
];

const usStatesVisited = [
	{ name: "California", visits: 4 },
	{ name: "New York", visits: 5 },
	{ name: "Texas", visits: 1 },
	{ name: "Colorado", visits: 1 },
	{ name: "Washington", visits: 1 },
	{ name: "District of Columbia", visits: 2 },
	{ name: "Pennsylvania", visits: 1 },
	{ name: "Rhose Island", visits: 1 },
	{ name: "Virginia", visits: 2 },
	{ name: "Georgia", visits: 1 },
	{ name: "Massachusetts", visits: 3 },
	{ name: "Florida", visits: 2 },
	// Add more states as needed
];

const chinaProvincesVisited = [
	{ name: "Gansu", visits: 1 },
	{ name: "Qinghai", visits: 1 },
	{ name: "Nei Mongol", visits: 1 },
	{ name: "Sichuan", visits: 2 },
	{ name: "Hunan", visits: 1 },
	{ name: "Zhejiang", visits: 4 },
	{ name: "Jiangsu", visits: 7 },
	{ name: "Shandong", visits: 1 },
	{ name: "Beijing", visits: 1 },
	{ name: "Hongkong", visits: 3 },
	{ name: "Taiwan", visits: 1 },
	// Add more provinces as needed
];

const WorldGlobe = () => {
	const globeEl = useRef();
	const [highlighted, setHighlighted] = useState(null);
	const [isSpinning, setIsSpinning] = useState(true);
	const isMobile = window.innerWidth <= 768;

	useEffect(() => {
		globeEl.current.pointOfView(
			{ lat: 0, lng: 0, altitude: isMobile ? 2 : 1.5 },
			0
		);
		globeEl.current.controls().autoRotate = isSpinning;
		globeEl.current.controls().autoRotateSpeed = 0.5;
	}, [isSpinning]);

	const getCountryColor = (name) => {
		const countryLived = countryLivedIn.find((c) => c.name === name);
		if (countryLived) {
			return countryLived.color;
		}

		const country = countryVisited.find((c) => c.name === name);
		if (country) {
			// Use a blue color scale with different shades based on the number of visits
			return d3.interpolateBlues(country.visits / 5);
		}
		return "#ffffff"; // White for countries not visited
	};

	const getStateOrProvinceColor = (name, type) => {
		const visitedList =
			type === "state" ? usStatesVisited : chinaProvincesVisited;
		const place = visitedList.find((p) => p.name === name);
		if (place) {
			return d3.interpolateBlues(place.visits / 5);
		}
		return "#ffffff"; // White for places not visited
	};

	const getData = () => {
		const worldFeatures = worldData.features;
		return worldFeatures.map((country) => ({
			...country,
			properties: {
				...country.properties,
				color: getCountryColor(country.properties.name),
			},
		}));
	};

	const calculateCentroid = (coordinates) => {
		const flatten = (arr) =>
			arr.reduce(
				(acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
				[]
			);
		const coordArray = flatten(coordinates);
		const n = coordArray.length / 2;
		const centroid = coordArray.reduce(
			(acc, val, i) => {
				if (i % 2 === 0) {
					acc[0] += val / n;
				} else {
					acc[1] += val / n;
				}
				return acc;
			},
			[0, 0]
		);
		return { lat: centroid[1], lng: centroid[0] };
	};

	const handlePolygonClick = (polygon) => {
		console.log("Polygon clicked:", polygon);
		const name = polygon.properties.name;
		const centroid = calculateCentroid(polygon.geometry.coordinates);
		if (name === "China") {
			console.log("China clicked");
			setHighlighted(
				chinaData.features.map((feature) => ({
					...feature,
					properties: {
						...feature.properties,
						color: getStateOrProvinceColor(
							feature.properties.NAME_1,
							"province"
						),
					},
				}))
			);
			setIsSpinning(false);
			zoomToCountry(centroid);
		} else if (name === "United States of America") {
			console.log("United States clicked");
			setHighlighted(
				usStatesData.features.map((feature) => ({
					...feature,
					properties: {
						...feature.properties,
						color: getStateOrProvinceColor(feature.properties.NAME, "state"),
					},
				}))
			);
			setIsSpinning(false);
			zoomToCountry(centroid);
		} else {
			console.log("Other area clicked");
		}
	};

	const zoomToCountry = (centroid) => {
		globeEl.current.pointOfView(
			{ lat: centroid.lat, lng: centroid.lng, altitude: isMobile ? 1.5 : 1 },
			1000
		);
	};

	const handleReset = () => {
		setHighlighted(null);
		setIsSpinning(true);
		globeEl.current.pointOfView(
			{ lat: 0, lng: 0, altitude: isMobile ? 2 : 1.5 },
			1000
		);
	};

	const toggleSpinning = () => {
		setIsSpinning(!isSpinning);
	};

	return (
		<div className="globe-container">
			<button className="toggle-spin-button" onClick={toggleSpinning}>
				{isSpinning ? "Stop Spinning" : "Start Spinning"}
			</button>
			<button
				className="reset-button"
				onClick={handleReset}
				disabled={!highlighted}
			>
				Default
			</button>
			<Globe
				ref={globeEl}
				className="globe"
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
				bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
				backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
				polygonsData={highlighted || getData()}
				polygonCapColor={(d) => d.properties.color}
				polygonSideColor={() => "rgba(255, 255, 255, 0.15)"}
				polygonStrokeColor={() => "#111"}
				polygonsTransitionDuration={300}
				onPolygonClick={handlePolygonClick}
			/>
		</div>
	);
};

export default WorldGlobe;
