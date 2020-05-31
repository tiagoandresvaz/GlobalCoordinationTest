<h1 align="center">Global Coordination Test</h1>
<p align="center">
<a href="https://www.nasa.gov/"><img src="./src/public/assets/nasa-logo.svg"></a>
<a href="https://covid19.spaceappschallenge.org/challenges/covid-challenges/light-path/teams/global-coordination-test/project"><img src="./src/public/assets/logo.png">
<a href="https://www.spaceappschallenge.org/"><img src="./src/public/assets/spaceapps-logo.png" width="100"></a>
<br>
<h3> How it Works </h3>
<h6 align="justify"> 
 
 "The Day/Night Band (DNB) sensor of the Visible Infrared Imaging Radiometer Suite (VIIRS), on board
the Suomi-National Polar-orbiting Partnership (S-NPP) and Joint Polar Satellite System (JPSS) satellite
platforms, provide global daily measurements of nocturnal visible and near-infrared (NIR) light that are
suitable for Earth system science and applications studies. "
(Source:) https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/viirs/VIIRS_Black_Marble_UG_V1.0_March_2019.pdf
<br>
  
  
  The idea is to build an app that coordinates tests of “isolation”, where different regions turn off their lights and 
create controlled blackouts demonstrating coordination, who does not turn off the light (it is because they are 
not informed, without coordination) high probability of not complying with social rules.</h6>
<h3>Sample</h3>
<img src="./src/public/assets/screenshot.png" >

> Work in Progress
>
> - Built an primary interface with the main idea.

<strong>Link to the project:</strong> [Here](https://covid19.spaceappschallenge.org/challenges/covid-challenges/light-path/teams/global-coordination-test/project)


-Data used in this project is from NASA's Global Imagery Browse Services (GIBS) APIs for the satllite imagery:

 function createLayer() {
    var source = new ol.source.WMTS({
      url: 'https://gibs-{a-c}.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?SERVICE=' 
      
this is a work in progress


-Night pobservations used to specify the novel proposed Coordination Score is from: 
https://earthdata.nasa.gov/earth-observation-data/near-real-time/download-nrt-data/viirs-nrt

Temporal Coverage
Start Date: 2017-07-25T00:00:00.000Z
Location Keywords
GEOGRAPHIC REGION > GLOBAL

Thanks to NASA’s Earth Observing System Data and Information System (EOSDIS) for getting started with geo data analysis!

Satelite details:

IMAGERY/BASE MAPS/EARTH COVER
Platform
SUOMI-NPP > Suomi National Polar-orbiting Partnership
Instrument
VIIRS > Visible-Infrared Imager-Radiometer Suite
      
