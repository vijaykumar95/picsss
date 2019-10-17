import React from 'react';
import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        AuthoriZation:'Client-ID 1876b084ae6741d77523beeeb8cb218c3d4f91c814931c4362ef5a6274617dcb'
      }
})
