import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode';
import Link from 'next/link';

const ScanModal = () => {
    const [scanResult,setScanResult]=useState(null);

    useEffect(()=>{
        const scanner=new Html5QrcodeScanner('reader',{
            qrbox:{
                width:250,
                height: 250
            },
            fps:5
        });
        const success=(result)=>{
            scanner.clear();
            setScanResult(result);
        }
        const error=(err)=>{
            console.warn(err);
        }
        scanner.render(success,error);
    },[])
  return (
    <div>
        <h1>Qr Code Scanning in React</h1>
        {
            scanResult?<div>Success: <Link href={"http://"+scanResult}/>{scanResult}</div>:
            
            <div id="reader"></div>
        }
    </div>
  )
}

export default ScanModal