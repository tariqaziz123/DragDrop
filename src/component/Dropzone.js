import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone';
import './Dropzone.css';
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
      /*let formData=new FormData()
      formData.append('uploadedFiles',acceptedFiles)
    console.log(formData)*/
    console.log(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="dropzone-container">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drag and drop</p> :
          <div>
          <p>Drag and Drops files to upload/click and upload</p>
          <FontAwesomeIcon icon={faUpload } style={{fontSize:"80px",color:"blue"}} />
          </div>
      }
    </div>
  )
}

export default MyDropzone;