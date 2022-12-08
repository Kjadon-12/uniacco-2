const mongoose = require('mongoose');


const ipSchema = new mongoose.Schema({
    ip:{
        type: String,
        required: true
    },
    network: {
       type: String,
    },//'8.8.8.0/24',
  version:{
    type: String,
  },// 'IPv4',
  city:{
    type: String,
  }, //'Mountain View',
  region: {
    type: String,
  },//'California',
  region_code: {
    type: String,
  },//'CA',
  country: {
    type: String,
  } ,//'US',
  country_name: {
    type: String,
  },//'United States',
  country_code: {
    type: String,
  },// 'US',
  //country_code_iso3: 'USA',
  country_capital:{
    type: String,
  },// 'Washington',
 // country_tld: '.us',
  //continent_code: 'NA',
  in_eu:{
    type: Boolean
  },// false,
  postal:{
    type: String,
  } ,//'94043',
  latitude:{
    type: Number
  } ,//37.42301,
  longitude: {
    type: Number
  },//-122.083352,
  timezone: {
    type: String
  },//'America/Los_Angeles',
  utc_offset:{
    type: String
  },//'-0800',
  country_calling_code: {
    type: String
  },// '+1',
  currency: {
    type: String
  },//'USD',
  currency_name: {
    type: String
  },//'Dollar',
  languages: {
    type: String
  } ,//'en-US,es-US,haw,fr',
  country_area: {
    type:Number
  },//9629091,
  country_population:
  {
    type:Number
  },// 327167434,
  asn:{
    type: String
  },// 'AS15169',
  org:{
    type: String
  } //'GOOGLE'
})

const ipapi = mongoose.model('ipapi', ipSchema)

module.exports = ipapi;