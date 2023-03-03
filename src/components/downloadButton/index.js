import React from 'react';
import expressBlobStorageApiClient from '../../clients/expressBlobStorageApiClient';
import './downloadButton.css';
import data from '../../mock/data.json';

const DownloadButton = () => {
    const saveDocument = async () => {
        const response = await expressBlobStorageApiClient.saveDocument(data);
        console.log(response);
    }
    return (
        <div className="container">
            <button className="download" onClick={saveDocument}>Download</button>
        </div>
    );
};

export default DownloadButton;