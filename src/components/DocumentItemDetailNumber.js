import React, { Component } from 'react'

const DocumentItemDetailNumber = (props) => {
  return (
    <header className="w3-container w3-amber">
      <h5>Invoice Nmb: {props.document.number}</h5>
    </header>
  )
}

export default DocumentItemDetailNumber
