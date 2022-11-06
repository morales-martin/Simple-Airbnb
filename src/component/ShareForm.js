import React from 'react'
import './ShareForm.css'

function ShareForm() {
  return (
    <div className='share-form-container'>
        <form>
            <div className='share-form-field'>
                <label>Recipients</label>
                <input type="text" className='share-form-input' name='Recipients'></input>
            </div>
            <div className='share-form-field'>
                <label>Message</label>
                <textarea type="text" className='share-form-input message' name='Message'></textarea>
            </div>
        </form>
    </div>
  )
}

export default ShareForm