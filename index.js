

const express = require('express');
const app = express();
app.use(express.json())

const dbConnect = require('./config/dbConnect')
const ipapi = require('./model/Schema')
const axios = require("axios");



dbConnect();




let baseUrl = "http://ipapi.co"
let ipAdd = "8.8.8.8"


     axios.get(baseUrl+`/${ipAdd}/json`)
     .then( async (response)=>{
        var loc = response.data
     
         const a = await ipapi.create({
            ip: loc.ip,
            network: loc.network,
            version: loc.version,
            city: loc.city,
            region: loc.region,
            region_code: loc.region_code,
            country: loc.country,
            country_name: loc.country_name,
            country_code: loc.country_code,
            country_capital: loc.country_capital,
            in_eu: loc.in_eu,
            postal: loc.postal,
            latitude: loc.latitude,
            longitude: loc.longitude,
            timezone: loc.timezone,
            utc_offset: loc.utc_offset,
            country_calling_code: loc.country_calling_code,
            currency: loc.currency,
            currency_name: loc.currency_name,
            languages: loc.languages,
            country_area: loc.country_area,
            country_population: loc.country_population,
            asn: loc.asn,
            org: loc.org
            
         })
        
         console.log(a)
          
     
    })
    
     app.get('/data/:id', async(req,res)=>{

        const {id} = req.params
     const data = await ipapi.findById(id)
     console.log(data)
     res.json(data)

     })
     app.get('/data', async(req,res)=>{
        const data = await ipapi.find()
        console.log(data)
        res.json(data)
     })


    

app.listen(3004, console.log(`Using this port 3004`));