import React from 'react'

const HeaderItem = (props) => {
  return (
    <div className="w3-cell" style={{width: "50%"}}>    
      <label className="w3-text-gray">{props.label}</label>
      <input className="w3-input w3-padding-small" type="text" defaultValue={props.value}/>
    </div>
  )
}

const HeaderItemCust = (props) => {
  return (<div>
    <label className="w3-text-gray">{props.label}</label>
    <input className="w3-input w3-padding-small" type="text" defaultValue={props.value}/>
  </div>)
}

const DocumentItemDetailHeader = (props) => {

  console.log(props.document.Date1)

  return (    
    <div className="w3-cell-row">
  
      <div className="w3-container w3-cell w3-mobile w3-padding-small" style={{width: "50%"}}>
        <form className="w3-container w3-padding-small">

          <div className="w3-cell-row">
            <HeaderItem label="Document nmb" value={props.document.Number}/>
            <HeaderItem label="Place of Invoice" value={props.document.Location}/>            
          </div>

          <div className="w3-cell-row">
            <HeaderItem label="Date" value={props.document.Date1}/>
            <HeaderItem label="Payment" value={props.document.Paymethod}/>
          </div>

          <div className="w3-cell-row">
            <HeaderItem label="Period from:" value={props.document.Period.Startdate1}/>
            <HeaderItem label="Period to:" value={props.document.Period.Enddate1}/>
          </div>

        </form>
      </div>

      <div className="w3-cell w3-mobile w3-padding-small" style={{width: "50%"}}>
        <form className="w3-padding-small">
          <HeaderItemCust label="Customer Name 1" value={props.document.Custname1}/>
          <HeaderItemCust label="Customer Name 2" value={props.document.Custname2}/>
          <HeaderItemCust label="VAT ID" value={props.document.Custnip}/>
          <HeaderItemCust label="Internal Account Nmb" value={props.document.Custaccnmb}/>
        </form>
      </div>
    </div>
  )
}

export default DocumentItemDetailHeader