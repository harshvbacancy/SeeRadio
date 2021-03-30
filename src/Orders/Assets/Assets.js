// import React from 'react'
// import { useDropzone } from 'react-dropzone';
// import { Button } from 'reactstrap';
// import './Assets.css';
// import PropTypes from 'prop-types'

// const Assets = ({ step, setStep, user, setUser }) => {

//     const Script = {maxFiles: 1, accept: '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'}
//     const Audio = {maxFiles: 1, accept: 'audio/*'}
//     const AdvAsset = {maxFiles: 0, accept: ''}
//     const {acceptedFiles,getRootProps,getInputProps,open} = useDropzone({
//         noClick: true,
//         noKeyboard: true,
//         maxFiles: Script.maxFiles,
//         accept:props.accept,
//         onDrop
//     });

//     const onDrop = (acceptedFiles) => {
//             acceptedFiles.forEach(file => {
//                 props.onChange(file, props.name)
//             })     
//     }

//     const handlerFiles = () => {
//         setUser({
//             type: 'UPDATE_ASSETS_INFO',
//             payload: acceptedFiles.map(file => (
//                 [file.name]
//             ))
//         })

//     }

//     return (
//         <>
//             <div className="title">Script File</div>
//             <section className="container d-flex flex-row ">
//                 <div {...getRootProps({ className: 'dropzone' })}>
//                     <input {...getInputProps()} />
//                     <p>Drag & Drop Your Script file Here</p>
//                 </div>
//                 <div className="font-weight-bold">OR</div>
//                 <button type="button" onClick={open}>
//                     UPLOAD
//                 </button>

//             </section>
//             <div className="contact">Voice File</div>
//             <section className="container d-flex flex-row">
//                 <div {...getRootProps({ className: 'dropzone' })}>
//                     <input {...getInputProps()} name="" />
//                     <p>Drag & Drop Your AUDIO file Here</p>
//                 </div>
//                 <div className="font-weight-bold">OR</div>
//                 <button type="button" onClick={open}>
//                     UPLOAD
//                 </button>

//             </section>
//             <div className="contact">Advertiser Assets</div>
//             <section className="container d-flex flex-row">
//                     <div {...getRootProps({ className: 'dropzone' })}>
//                         <input {...getInputProps()} />
//                         <p>Drag & Drop Your File Here</p>
//                     </div>
//                     <div className="font-weight-bold">OR</div>
//                     <button type="button" onClick={open}>
//                         UPLOAD
//                 </button>
//             </section>
//             <aside>
//                 <h4>Accepted files</h4>
//                 <ul>{acceptedFileItems}</ul>
//             </aside>
//             <aside>
//                 <h4>Accepted files</h4>
//                 <ul>{acceptedAudioFileItems}</ul>
//             </aside>
//             <aside>
//                 <h4>Accepted files</h4>
//                 <ul>{acceptedotherFileItems}</ul>
//             </aside>
//             <Button>Done</Button>
//         </>
//     );
// }
// Advertisers.propTypes = {
//     step: PropTypes.number,
//     setStep: PropTypes.func,
//     user: PropTypes.object,
//     setUser: PropTypes.func,
// }


// export default Assets
