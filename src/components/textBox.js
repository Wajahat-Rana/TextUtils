import React,{useState} from 'react'
// import PropTypes from 'prop-types'
export default function TextBox(props) {


  // const [btnText, setbtnText] = useState(
  //   'Dark Mode'
  // )
  // const [Mode, setMode] = useState(
  //   {
  //     backgroundColor : 'white'
  //   }
  // )
  // const toggleMode = ()=>{
  //   if(Mode.backgroundColor == 'white'){
  //     setMode({
  //       backgroundColor : 'black',
  //       color: 'white'
  //     })
  //     setbtnText('Light Mode')
  //   }
  //   else{
  //     setMode({
  //       backgroundColor : 'white',
  //       color: 'black',
  //     })
  //     setbtnText('Dark Mode')
  //   }
  // }

    const[text,setText] = useState('') 
    const handleUpperCase = ()=>{
        if(text !== ''){
          setText(text.toUpperCase());
          props.showAlert('success','Converted  To UpperCase')
        }
        else{
          props.showAlert('warning','Please Enter Some Text First')
        }
    }
    const handleLowerCase = ()=>{
      if(text !== ''){
        setText(text.toLowerCase());
        props.showAlert('success','Converted  To LowerCase')
      }
      else{
        props.showAlert('warning','Please Enter Some Text First')
      }
    }
    const handleClear = (event)=>{
      if(text !== ''){
        setText("");
      document.getElementById('emailsHere').innerText = ""
      props.showAlert('success','Text Cleared')
      }
      else{
        props.showAlert('warning','TextField Already Empty')
      }
      }
    
    const handleCopy = ()=>{
      if(text !== ''){
        let copyText = document.getElementById("inputText")
      copyText.select();
      document.getSelection().removeAllRanges();
      navigator.clipboard.writeText(copyText.value);
      }
      else{
        props.showAlert('warning','Please Enter Some Text First')
      }
    }
    const handleSpaces = () => {
  

      if(text !== ''){
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
      }
      else{
        props.showAlert('warning','Please Enter Some Text First')
      }
    }
    const handleChange = (event)=>{
      setText(event.target.value);
    }


    function extractEmails(text) {
      if(text !== ''){
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    
      // Extract emails using the regex
      const emails = text.match(emailRegex) || [];
    
      return emails;
      }
      else{
        props.showAlert('warning','Please Enter Some Text First')
      }
      // Regular expression to match email addresses
      
    }

    const handleEmails = ()=>{
      let emails = extractEmails(text)
      if(emails === undefined){
      document.getElementById('emailsHere').innerText = ''
      }
      else{
      document.getElementById('emailsHere').innerText = emails
      }
    }
    
  return (
    <>
    {/* <div className='container my-3' style={Mode}> */}
    <div className='container my-3' >
    <div className="mb-3" >
    <label htmlFor="inputText" className="form-label my-3"><h3 style={{color : props.mode==='dark'?'white':'black'}}>TextUtils | Word Counter | UpperCase And LowerCase Converter | Extracter</h3></label>
    <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'greyish':'white',color : props.mode==='dark'?'black':'black'}} value={text} id="inputText" rows="5" onChange={handleChange}></textarea>
    <div>    
    <button className="btn btn-outline-primary my-3 mx-2" style={{color : props.mode==='dark'?'white':'black'}} type="submit" onClick={handleUpperCase}>UpperCase</button>
    <button className="btn btn-outline-primary my-3 mx-2" style={{color : props.mode==='dark'?'white':'black'}} type="submit" onClick={handleLowerCase}>LowerCase</button>
    <button className="btn btn-outline-primary my-3 mx-2" style={{color : props.mode==='dark'?'white':'black'}} type="submit" onClick={handleClear}>Clear</button>
    <button className="btn btn-outline-primary my-3 mx-2" style={{color : props.mode==='dark'?'white':'black'}} type="submit" onClick={handleSpaces}>Remove Spaces</button>
    <button className="btn btn-outline-primary my-3 mx-2" style={{color : props.mode==='dark'?'white':'black'}} type="submit" onClick={handleCopy}>Copy</button>
    <button className="btn btn-outline-primary my-3 mx-2" style={{color : props.mode==='dark'?'white':'black'}} type="submit" onClick={handleEmails}>Extract Emails</button>

    {/* <button className="btn btn-outline-success my-3 mx-3" type="submit" onClick={toggleMode}>{btnText}</button> */}
    </div>
  </div>
  </div>
  <div className='container my-3 ' style={{color : props.mode==='dark'?'white':'black'}}>
    <h2>Analysis : </h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters.</p>
    <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Time To Read.</p>
    <h4>Extracted Emails :</h4>
    <p id='emailsHere'></p>
  </div>
  </>
  )
}
