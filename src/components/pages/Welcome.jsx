import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";
import ImageUpload from "../ImageUpload";

const Welcome = ({file, setFile, user}) => {
    return ( 
        <div>
            <h1>Welcome</h1>
            <ImageUpload user={user} file={file} setFile={setFile}/>
            <Button/>
        </div>
     );
}
 
export default Welcome;
